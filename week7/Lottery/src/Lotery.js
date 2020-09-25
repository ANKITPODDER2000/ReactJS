import React, { Component } from "react";
import Ball from "./Ball";
import "./Lotery.css";

class Lotery extends Component {
    static defaultProps = {
        title: "Lottery", 
        numBall: 10,
        maxNum : 40
	}
	
	constructor(props) {
		super(props);
		let arr = [];
		for (let i = 0; i < this.props.numBall; i++){
			arr.push(Math.floor(Math.random() * this.props.maxNum));
		}

		this.state = {
			numArr : arr,
		}

		this.generate = this.generate.bind(this);
	}
	generate() {
		let newArr = this.state.numArr.map(a =>
				Math.floor(Math.random() * this.props.maxNum)
		)
		//console.log(newArr);
		this.setState({
			numArr : newArr,
		})
	}
  	render() {
    	return (
        <div className="lotery-container">
          <h1>{this.props.title}</h1>
          <div className="ballContainer">
            {this.state.numArr.map((digit) => (
              <Ball val={digit} />
            ))}
          </div>
          <button onClick={this.generate}>Generate Lottery</button>
        </div>
      );
  	}
}

export default Lotery;