import React , {Component} from "react";
import { Redirect } from "react-router-dom";
import FoodSearch from "./FoodSearch";
class Food extends Component{
    render() {
        let img_link = `https://source.unsplash.com/1000x500/?${this.props.food}`;
        return (
            <div className="food">
                {
                    /\d/.test(this.props.food) ?
                        <Redirect to="/" /> : 
                        null
                }
                <h1>I Love to eat {this.props.food}</h1>
                <img src={img_link} alt="img_food" />
                <FoodSearch history={this.props.history}/>
            </div>
        )
    }
}

export default Food;