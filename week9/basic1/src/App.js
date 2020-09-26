import React, { Component } from 'react';
import Enter from "./Enter";
import Input from "./Input";
import Paragraph from "./Paragraph";
import './App.css';

class App extends Component{
    render() {
        return (
            <div className="App">
                <h1>Hello</h1>
                <Enter />
                <Input />
                <Paragraph />
            </div>
        )
    }
}

export default App;
