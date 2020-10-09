import React, { Component } from "react";
import "./Input.css"

class Input extends Component{
    constructor(props) {
        super(props);
        this.state = {
            query : ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            query: e.target.value,
        })
    }
    processInput(str) {
        let arr = str.split(" ");
        let r = "";
        for (let i = 0; i < arr.length; i++)
        {
            if (arr[i].trim() !== "")
                r += (arr[i] + "+");
        }
        if (r[r.length - 1] === "+")
            return r.slice(0, r.length - 1);
        return r;
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.query !== "") {
            let str = this.processInput(this.state.query);
            let url = "https://pixabay.com/api/?key=18636194-f55f272ac551b950c3c7ad799&q=" + str + "&image_type=photo&pretty=true";
            console.log(url);
            fetch(url).then(response => {
                return response.json();
            }).then(data => {
                this.props.addImages(data["hits"]);
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.query}
                    name="query"
                    onChange = {this.handleChange}
                />
                <button>Search</button>
            </form>
        )
    }
}

export default Input;