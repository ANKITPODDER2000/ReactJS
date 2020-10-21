import React, { Component } from "react";
import Nav from "./Nav";
import coke from "./coke.png";
import { Link } from "react-router-dom";
import "./Soda.css"

class Soda extends Component{
    render() {
        return (
            <div className="soda">
                <Nav />
                <div className="container">
                    <img className="rotate" src={coke} alt="coke1" />
                    <div className="text-container">
                        <p>OMG SUGARRRR!!!</p>
                        <Link to="/">HOME</Link>
                    </div>
                    <img className="rotate" src={coke} alt="coke2"/>
                </div>
            </div>
        )
    }
}

export default Soda;