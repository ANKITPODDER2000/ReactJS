import React, { Component } from "react";
import Nav from "./Nav";
import "./Home.css";
import img from "./ven_mea.png"
import { Link } from "react-router-dom";

class Home extends Component{
    render() {
        return (
            <div className="home">
                <Nav />
                <div className="container">
                    <p>Hello I am vending machine !<br/>What would you like to eat?</p>
                    <img src={img} />
                    <div className="link-container">
                        <Link to="/soda">Soda</Link>
                        <Link to="/chips">Chips</Link>
                        <Link to="/tandoor">Tandoor</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;