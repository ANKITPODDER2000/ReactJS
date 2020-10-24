import React, { Component } from 'react';
import { Switch , Route } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColor from "./seedColor";
import { generatePalette } from "./ColorHelpers";

class App extends Component{
    getColor(id) {
        let flag = -1;
        for (let i = 0; i < seedColor.length; i++){
            if (seedColor[i].id === id) {
                flag = i;
                break;
            }
        }
        if (flag === -1) return <h1>COLOR PALETTE NOT FOUND!</h1>
        return <Palette {...generatePalette(seedColor[flag])}/>
    }
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <PaletteList color={seedColor}/>} />
                <Route exact path="/palette/:id" render={(details) =>
                    this.getColor(details.match.params.id)}
                />
            </Switch>
        )
    }
}

export default App;
