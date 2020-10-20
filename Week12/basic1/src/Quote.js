import React, { Component } from "react";
import axios from "axios";
import "./Quote.css"

class Quote extends Component{
    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            loaded : false
        }
    }
    componentDidMount() {
        axios.get("https://api.github.com/zen").then(res => {
            this.setState({quote : res.data , loaded : true})
        })
    }
    render() {
        return (
            <div >
                {this.state.loaded ?
                    <p>{this.state.quote}</p> :
                    <div>
                        <span className="loader">
                            <span className="loader-inner"></span>
                        </span>
                    </div>
                }
            </div>
        )
    }
}

export default Quote;