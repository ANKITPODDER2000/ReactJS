import React, { Component } from "react";

class Input extends Component{
    keydown() {
        console.log("Press an Key");
    }
    render() {
        return <textarea placeholder="Text Area" onKeyDown={this.keydown}></textarea>
    }
}
export default Input;