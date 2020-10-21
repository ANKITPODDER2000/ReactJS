import React, { Component } from "react";
import "./Joke.css"

class Joke extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.getColor = this.getColor.bind(this);
        this.getEmoji = this.getEmoji.bind(this);
    }
    handleClick(val) {
        this.props.vote(this.props.joke.key , val)
    }
    getColor() {
        if (this.props.joke.vote >= 15)
            return '#4caf50';
        else if (this.props.joke.vote >= 12)
            return '#8bc34a';
        else if (this.props.joke.vote >= 9)
            return '#cddc39';
        else if (this.props.joke.vote >= 6)
            return '#ffeb3b';
        else if (this.props.joke.vote >= 3)
            return '#ffc107';
        else if (this.props.joke.vote >= 0)
            return '#ff9800';
        else
            return '#f44336';
    }
    getEmoji() {
        if (this.props.joke.vote >= 15)
            return <i className="em em-rolling_on_the_floor_laughing" ></i>;
        else if (this.props.joke.vote >= 12)
            return <i className="em em-laughing" ></i>;
        else if (this.props.joke.vote >= 9)
            return <i className="em em-smiley" ></i>;
        else if (this.props.joke.vote >= 6)
            return <i className="em em-slightly_smiling_face" ></i>;
        else if (this.props.joke.vote >= 3)
            return <i className="em em-neutral_face" ></i>;
        else if (this.props.joke.vote >= 0)
            return <i className="em em-confused" ></i>;
        else
            return <i className="em em-angry" ></i>;
    }
    render() {
        let class_name;
        if (this.props.ind % 2 === 0)
            class_name = "joke even"
        else
            class_name = 'joke'
        return (
            <div className={class_name}>
                <i onClick={() => this.handleClick(1)} className="fas fa-arrow-up"></i>
                <p className="vote" style={{borderColor:this.getColor()}}>{this.props.joke.vote}</p>
                <i onClick={() => this.handleClick(-1)} className="fas fa-arrow-down"></i>
                <p className="joke-cont">{this.props.joke.joke}</p>
                {this.getEmoji()}
            </div>
        )
    }
}

export default Joke;
