import React, { Component } from "react";
import "./Button.css";

class Button extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.btnClick();
    }
    render() {
        return (
          <div className="button">
            <button onClick={this.handleClick} disabled={this.props.details.disabled}>
                {this.props.details.btnclickleft}
                {this.props.details.btnclickleft === 2 ? " Rolls " : " Roll "}
                Left
            </button>
          </div>
        );
    }
}
export default Button;