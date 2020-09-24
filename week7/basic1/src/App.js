import React, { Component } from 'react';
import Dice from "./Dice";
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      'die1': Math.floor(Math.random() * 6),
      'die2': Math.floor(Math.random() * 6),
      'roling' : false
    }
    this.shake = this.shake.bind(this);
  }

  shake() {
    this.setState(
      {
        'die1': Math.floor(Math.random() * 6),
        'die2': Math.floor(Math.random() * 6),
        'roling': true
      }
    );
    
    setTimeout( () => {
      this.setState({'roling': false})
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <div className="dice-container">
          <Dice num = {this.state.die1} roling={this.state.roling} />
          <Dice num = {this.state.die2} roling={this.state.roling} />
        </div>
        <button onClick={this.shake} disabled={this.state.roling}>
          {this.state.roling ? "Roling..." : "Role Dice!"}
        </button>
      </div>
    )
  }
}

export default App;
