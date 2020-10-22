import React, { Component } from "react";
import { Link } from "react-router-dom";

class FoodSearch extends Component{
    constructor(props) {
        super(props);
        this.state = {
            query : ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({
            query : evt.target.value,
        })
    }
    render() {
        return (
            <div className="food-search">
                <h1>Food Search !</h1>
                <input
                    placeholder="Food search"
                    value={this.state.query}
                    onChange = {this.handleChange}
                />
                <br />
                <Link to={`/food/${this.state.query}`} >Search </Link>
            </div>
        )
    }
}

export default FoodSearch;