import React, { Component } from "react";
import "./Heading.css";

class Heading extends Component{
    render() {
        let s = 0;
        let arr = this.props.exp;
        for (let i = 0; i < arr.length; i++)
            s += arr[i];
        return (
            <div className="heading">
                <h1 className={this.props.className}>{this.props.text}</h1>
                <p>Total Experience : {s}</p>
            </div>
        )
    }
}

export default Heading;