import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Dog.css"

class Dog extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.history.goBack();
    }
    render() {
        return (
            <div className="dog">
                <img src={this.props.dog.img} />
                <h1>{this.props.dog.name}</h1>
                <p>{this.props.dog.age} years old.</p>
                {this.props.dog.facts.map(fact =>
                    <div className="facts">
                        <li>{fact}</li>
                        <hr />
                    </div>
                )}
                <button onClick={this.handleClick}>Go Back</button>
            </div>
        )
    }
}

export default withRouter(Dog);