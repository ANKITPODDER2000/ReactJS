import React, { Component } from "react";

class Input extends Component{
    keydown(e) {
        console.log("Press an Key");
        console.log(e);
    }
    render() {
        return <textarea placeholder="Text Area" onKeyDown={this.keydown}></textarea>
    }
}
export default Input;