import React, { Component } from 'react';
import Board from "./Board"
import './App.css';

class App extends Component{
    render() {
        return (
            <div className="app">
                <Board
                    norow={5}
                    nocol={5}
                />
            </div>
        )
    }
}


export default App;
