import React, { Component } from 'react';
import Lotery from "./Lotery";
import './App.css';

class App extends Component{
  render() {
    return (
      <div className="App">
        <Lotery />
        <Lotery
          title="Small Lottery"
          numBall={6}
          maxNum={10}
        />
      </div>
    )
  }
}

export default App;
