import React, { Component } from "react";
import './Card.css';

class Card extends Component{
    render() {
        return <img style={{transform:this.props.PROPS.transform}} src={this.props.PROPS.img} alt={this.props.PROPS.code}/>
    }
}

export default Card;