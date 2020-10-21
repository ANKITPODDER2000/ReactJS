import React, { Component } from "react";
import {Link} from "react-router-dom";
import lays from "./lays.png"
import "./Chips.css";
import Nav from "./Nav";

class Chips extends Component{
    constructor(props) {
        super(props);
        this.state = {
            pack : [],
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        let x = String(Math.floor(Math.random() * 100))+"%";
        let y = String(Math.floor(Math.random() * 90)) + "%";
        this.setState({
            pack : [...this.state.pack , {x:x , y : y}],
        })
    }
    render() {
        return (
            <div className="chips">
                <Nav />
                <div className="container">
                    {this.state.pack.map(m => <img style={{top:m.x , left:m.y}} className="lays" src={lays} />)}
                    <div className="text-container">
                        <p>Bags Eaten : {this.state.pack.length}</p>
                        <button onClick={this.handleClick}>Add One!</button>
                        <Link to="/">Home</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chips;