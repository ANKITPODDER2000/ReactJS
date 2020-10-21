import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"

class Nav extends Component{
    render() {
        return (
            <nav>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink exact to="/soda" activeClassName="active">Soda</NavLink>
                <NavLink exact to="/chips" activeClassName="active">Chips</NavLink>
                <NavLink exact to="/tandoor" activeClassName="active">Tandoor</NavLink>
            </nav>
        )
    }
}

export default Nav;