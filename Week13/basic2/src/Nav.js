import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Nav.css";

class Nav extends Component{
    constructor(props) {
        super(props);
        this.popcorn = this.popcorn.bind(this);
        this.goBack = this.goBack.bind(this);
    }
    popcorn() {
        this.props.history.push("/food/popcorn");
    }
    goBack() {
        this.props.history.goBack();
    }
    render() {
        return (
            <nav>
                <button onClick={this.goBack}>Back!!</button>
                <button onClick={this.popcorn}>POPCORN!</button>
            </nav>
        )
    }
}

export default withRouter(Nav);