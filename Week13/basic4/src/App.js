import React, { Component } from 'react';
import { Switch , Route } from "react-router-dom";
import Palette from "./Palette";
import seedColor from "./seedColor";
import { generatePalette } from "./ColorHelpers";

class App extends Component{
    render() {
        let color = generatePalette(seedColor[2]);
        console.log(color);
        console.log(seedColor[2])
        return (
            <Switch>
                <Route exact path="/" render={()=><h1>HELLO THIS IS HOME</h1>}></Route>
                <Route exact path="/palette/:id" render={()=><h1>HELLO THIS IS PALETTE !</h1>}></Route>
            </Switch>
        )
    }
}

export default App;
