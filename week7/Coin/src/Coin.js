import React, { Component } from "react";
import tail from "./tail.jpg";
import head from "./head.jpg";
import './Coin.css'

class Coin extends Component{
    constructor(props) {
        super(props);
        let img_arr = [
            head,
            tail
        ]
        this.state = {
            img_arr: img_arr,
            heads: 0,
            tails: 0,
            count: 0,
            currentImg : null
        }
        this.toss = this.toss.bind(this);
    }
    
    getHead(currentState) {
        return {
            heads: currentState.heads + 1,
            currentImg: currentState.img_arr[0],
            count : currentState.count + 1
        }
    }

    getTail(currentState) {
        return {
            tails: currentState.tails + 1,
            currentImg: currentState.img_arr[1],
            count : currentState.count + 1
        }
    }

    toss() {
        let rand = Math.floor(Math.random() * 2);
        console.log(rand);
        if (rand === 0) {
            this.setState(this.getHead);
        }
        else {
            this.setState(this.getTail);
        }
    }

    render() {
        return (
            <div className="coin">
                <h1>Lets flip a coin</h1>
                {this.state.count > 0 ? <img src={this.state.currentImg} alt="" width="300" /> : null}
                <h3>Out of {this.state.count} {this.state.count <= 1 ? "flip" : "flips"} , there have been {this.state.heads} {this.state.heads<= 1 ? "head" : "heads"} and {this.state.tails}  {this.state.tails<= 1 ? "tail" : "tails"} !</h3>
                <button onClick={this.toss}>Flip me</button>
            </div>
        )
    }
}

export default Coin;