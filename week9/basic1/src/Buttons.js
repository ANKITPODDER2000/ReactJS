import React, { Component } from "react";
import "./Buttons.css";

class Buttons extends Component{
    static defaultProps = {
        colors : ["orange" , "green" , "violet" , "pink" ],
    }
    constructor(props) {
        super(props);
        this.state = { color: "#fff" };
        this.btnClick = this.btnClick.bind(this);
    }
    btnClick(color) {
        //console.log("Click");
        this.setState({ color: color });
    }
    render() {
        return (
            <div className="btn-box" style={{backgroundColor:this.state.color}}>
                {this.props.colors.map(c => {
                    let colorObj = { backgroundColor: c };
                    return (
                        <button style={colorObj} onClick={() => this.btnClick(c)}>Click me</button>
                    )
                })}
            </div>
        )
    }
}

export default Buttons;