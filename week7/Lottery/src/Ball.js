import React, { Component } from "react";
import "./Ball.css";

class Ball extends Component{
    render() {
        return (
            <div className="ball">{this.props.val}</div>
        )
    }
}

export default Ball;