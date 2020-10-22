import React , {Component} from "react";
import FoodSearch from "./FoodSearch";
class Food extends Component{
    render() {
        let img_link = `https://source.unsplash.com/1000x500/?${this.props.food}`;
        return (
            <div className="food">
                <h1>I Love to eat {this.props.food}</h1>
                <img src={img_link} alt="img_food" />
                <FoodSearch />
            </div>
        )
    }
}

export default Food;