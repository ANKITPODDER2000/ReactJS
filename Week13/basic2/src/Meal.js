import React, { Component } from "react";
import MealSearch from "./MealSearch";

class Meal extends Component{
    render() {
        let food_link = `https://source.unsplash.com/1000x500/?${this.props.food}`;
        let drink_link = `https://source.unsplash.com/1000x500/?${this.props.drink}`;
        return (
            <div className="food">
                <h1>I Love to eat {this.props.food} + {this.props.drink}</h1>
                <img src={food_link} alt="img_food" />
                <img src={drink_link} alt="img_food" />
                <MealSearch />
            </div>
        )
    }
}

export default Meal;