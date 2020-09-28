import React, { Component } from 'react';
import "./Header.css";

class Header extends Component{
    static defaultProps = {
        clnm : "",
    }
    render() {
        return (
            <h1 className={this.props.clnm}><span className="neon">{this.props.first}</span><span className="flux">{this.props.second}</span></h1>
        )
    }
}

export default Header;