import React, { Component } from 'react';
import Enter from "./Enter";
import Input from "./Input";
import Paragraph from "./Paragraph";
import Buttons from "./Buttons";
import DeleteNumber from "./DeleteNumber";
import NewDeleteNumber from "./NewDeleteNumber";
import './App.css';

class App extends Component{
    render() {
        return (
            <div className="App">
                <h1>Hello</h1>
                <Enter />
                <Input />
                <Paragraph />
                <Buttons />
                <DeleteNumber />
                <NewDeleteNumber />
            </div>
        )
    }
}

export default App;
