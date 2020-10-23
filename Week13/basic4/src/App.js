import React, { Component } from 'react';
import Palette from "./Palette";
import seedColor from "./seedColor";
import { generatePalette } from "./ColorHelpers";

class App extends Component{
    render() {
        let color = generatePalette(seedColor[2]);
        console.log(color);
        console.log(seedColor[2])
        return (
            <div className="App">
                <Palette {...color}/>
            </div>
        )
    }
}

export default App;
