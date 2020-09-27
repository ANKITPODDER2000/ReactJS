import React, { Component } from "react";

class Num extends Component{
    render() {
        return (
            <li>
                <h3 style={{display:"inline" , marginRight:"20px"}}>{this.props.num}</h3>
                <button onClick={this.props.click}>x</button>
            </li>
        )
    }
}

export default Num;