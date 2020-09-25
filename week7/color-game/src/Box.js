import React, { Component } from 'react';
import "./Box.css";

class Box extends Component { 
    static defaultProps = {
        colorArr: [ 'yellow', "#3939f1", "#18ef32", "#d087fd", "#7602bd",
            '#ec66c9', '#9a0b32', '#0d8ce6', '#062338', '#0d9c7b', '#581845', '#900c3f', '#c70039',
            '#ff5733', '#ffc30f', '#00ff1f', '#407d47', '#99d6a0', '#ffff7a', '#141115', '#d0b6d8',
            '#824794', '#ffd558', '#376579', '#e91e63', '#8484f5', '#363684', '#060619','#01011f'],
    }
    constructor(props) {
        super(props);
        this.state = {
            color: this.choose(this.props.colorArr),
        }
        this.changeColor = this.changeColor.bind(this);
    }
    choose(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    changeColor() {
        let newColor = null;
        for (let i = 0; ;) {
            newColor = this.choose(this.props.colorArr);
            if (newColor != this.state.color)
                break;
        }
        console.log(newColor);
        this.setState({ color: newColor });
    }
    render() {
        return (
            <div
                className="color-block"
                style={{ background: this.state.color }}
                onClick={this.changeColor}
            ></div>
        )
    }
}

export default Box;