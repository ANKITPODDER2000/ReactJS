import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import "./Nav.css";

class Nav extends Component{
    render() {
        return (
            <nav>
                <NavLink exact to="/" activeClassName="active" className="Home" key={uuidv4()}>Home</NavLink>
                <div className="dog-list">
                    {this.props.dog.map(d =>
                        <NavLink
                            exact to={`/dogs/${d.name}`}
                            activeClassName="active"
                            key={uuidv4()}
                        >
                            {d.name}
                        </NavLink>
                    )}
                </div>
            </nav>
        )
    }
}

export default Nav;