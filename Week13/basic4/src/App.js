import React, { Component } from 'react';
import Palette from "./Palette";
import seedColor from "./seedColor";

class App extends Component{
    render() {
        return (
            <div className="App">
                <Palette {...seedColor[4]}/>
            </div>
        )
    }
}

export default App;
