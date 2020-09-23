import React , {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isWin: false,
      num  : 1
    }
    this.newNumber = this.newNumber.bind(this);
  }

  newNumber(e) {
    let rand = Math.floor(Math.random() * 10);
    this.setState({ num: rand });
    if (rand === 7) {
      this.setState({
        isWin : true,
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Current Number is : {this.state.num}</h1>
        {this.state.isWin ? <p>You win the game</p> : <button onClick = {this.newNumber}>New Number</button>}
      </div>
    );
  }
}

export default App;
