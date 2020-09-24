import React, { Component } from 'react';
import "./Dice.css";

class Dice extends Component{
    render() {
        let arr = ['one', 'two', "three", 'four', "five", "six"];
        let className = "fas fa-dice-" + arr[this.props.num];
        if (this.props.roling) {
            className += " roling"
        }
        return (
            <div >
                <i className={className}></i>
            </div>
        )
    }
}

export default Dice;