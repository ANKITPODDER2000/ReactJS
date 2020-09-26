import React, { Component } from "react";
class Enter extends Component{
    mouseenter() {
        console.log("You hover on this emoji!");
    }
    render() {
        return (
            <div>
                <h3 onMouseEnter={this.mouseenter}>😄😄😄</h3>
            </div>
        )
    }
}

export default Enter;