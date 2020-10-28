import React, { Component } from 'react';
import { Switch , Route } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import ShadePalette from "./ShadePalette";
import seedColor from "./seedColor";
import { generatePalette } from "./ColorHelpers";
import NewPaletteForm from "./NewPaletteForm";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            palette : seedColor
        }
        this.savePalette = this.savePalette.bind(this);
    }
    savePalette(newPalette) {
        this.setState({
            palette : [...this.state.palette , newPalette]
        })
    }
    getColor(id) {
        let flag = -1;
        for (let i = 0; i < this.state.palette.length; i++){
            if (this.state.palette[i].id === id) {
                flag = i;
                break;
            }
        }
        if (flag === -1) return <h1>COLOR PALETTE NOT FOUND!</h1>
        return <Palette {...generatePalette(this.state.palette[flag])}/>
    }
    getShades(paletteId, colorId) {
        let flag = -1;
        for (let i = 0; i < this.state.palette.length; i++){
            if (this.state.palette[i].id === paletteId) {
                flag = i;
                break;
            }
        }
        if (flag === -1) return <h1>COLOR PALETTE NOT FOUND!</h1>
        let color = generatePalette(this.state.palette[flag]).colors;
        let colorArr = [];
        for (let intensity in color) {
            if (intensity !== "50") {
                for (let col in color[intensity]) {
                    //console.log(color[intensity][col]);
                    if (color[intensity][col].id === colorId) {
                        colorArr.push(color[intensity][col]);
                        break;
                    }
                }
            }
        }
        if(colorArr.length === 0) return <h1>COLOR SHADE NOT FOUND!</h1>
        let arr = {
            colors: colorArr,
            paletteId: paletteId,
            emoji : this.state.palette[flag].emoji
        }
        return <ShadePalette {...arr}/>
    }
    render() {
        return (
            <Switch>
                <Route
                    exact path="/"
                    render={() =>
                        <PaletteList
                            color={this.state.palette}
                        />}
                />
                <Route
                    exact path="/palette/new"
                    render={() =>
                        <NewPaletteForm
                            savePalette={this.savePalette}
                            palette = {this.state.palette}
                        />
                    }
                />
                <Route
                    exact path="/palette/:id"
                    render={(details) =>
                        this.getColor(details.match.params.id)
                    }
                />
                <Route
                    exact path="/palette/:paletteId/:colorId"
                    render={(details) =>
                        this.getShades(details.match.params.paletteId , details.match.params.colorId)
                    }
                />
            </Switch>
        )
    }
}

export default App;
