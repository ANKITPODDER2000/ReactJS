import React, { Component } from "react";
import "./Cell.css";

class Cell extends Component{
    constructor(props) {
        super(props);
        this.a = this.a.bind(this);
    }
    a() {
        this.props.handleClick(this.props.pos);
    }
    render() {
        return (
            <td className={this.props.class} onClick={this.a}></td>
        )
    }
}

export default Cell;