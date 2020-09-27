import React , {Component} from 'react';
import HangmanGame from "./HangmanGame";
import './App.css';

class App extends Component{
    render(){
        return(
            <div className="App">
                <h1>Hangman Game!</h1>
                <HangmanGame/>
            </div>
        )
    }
}

export default App;
