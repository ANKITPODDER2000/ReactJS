import React, { Component } from "react";
import { Link } from "react-router-dom";

class MealSearch extends Component{
    constructor(props) {
        super(props);
        this.state = {
            food: "",
            drink : ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name] : evt.target.value,
        })
    }
    render() {
        return (
            <div className="food-search">
                <h1>Meal Search !</h1>
                <input
                    placeholder="Food search"
                    value={this.state.food}
                    name="food"
                    onChange = {this.handleChange}
                />
                <br />
                <input
                    placeholder="Drink search"
                    value={this.state.drink}
                    name="drink"
                    onChange = {this.handleChange}
                />
                <br />
                <Link to={`/food/${this.state.food}/drink/${this.state.drink}`} >Search </Link>
            </div>
        )
    }
}

export default MealSearch;