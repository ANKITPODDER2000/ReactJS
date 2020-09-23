import React, { Component } from "react";
import "./Heading.css";

class Heading extends Component{
    render() {
        let s = 0;
        let arr = this.props.exp;
        return (
            <div className="heading">
                <h1 className={this.props.className}>{this.props.text}</h1>
                <p>Total Experience : {this.props.exp}</p>
            </div>
        )
    }
}

export default Heading;