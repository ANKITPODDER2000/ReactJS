import React, { Component } from 'react';
import { Switch , Route } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import ShadePalette from "./ShadePalette";
import seedColor from "./seedColor";
import { generatePalette } from "./ColorHelpers";

import Page from "./Page";
import NewPaletteForm from "./NewPaletteForm";
import { TransitionGroup, CSSTransition } from "react-transition-group";


class App extends Component{
    constructor(props) {
        super(props);
        const savePalette = JSON.parse(window.localStorage.getItem('palette'));
        this.state = {
            palette :  savePalette || seedColor,
        }
        this.savePalette = this.savePalette.bind(this);
        this.syncStorage = this.syncStorage.bind(this);
        this.delelePalette = this.delelePalette.bind(this);
    }
    savePalette(newPalette) {
        this.setState({
            palette : [...this.state.palette , newPalette]
        } , this.syncStorage)
    }
    delelePalette(paletteName) {
        this.setState({
            palette : this.state.palette.filter(color => color.paletteName !== paletteName)
        } , this.syncStorage)
    }
    syncStorage() {
        window.localStorage.setItem(
            'palette', JSON.stringify(this.state.palette)
        )
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
        return <Page><Palette {...generatePalette(this.state.palette[flag])}/></Page>
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
            emoji: this.state.palette[flag].emoji,
            paletteName : this.state.palette[flag].paletteName,
        }
        return <Page><ShadePalette {...arr}/></Page>
    }
    render() {
        return (
            <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition key={location.pathname} classNames="page" timeout={500}>
                        <Switch location={location}>
                            {console.log(location)}
                            <Route
                                exact path="/"
                                render={() =>
                                    <Page>
                                        <PaletteList
                                            color={this.state.palette}
                                            delelePalette = {this.delelePalette}
                                        />
                                    </Page>
                                }
                            />
                            <Route
                                exact path="/palette/new"
                                render={() =>
                                    <Page>
                                        <NewPaletteForm
                                            savePalette={this.savePalette}
                                            palette = {this.state.palette}
                                        />
                                    </Page>
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
                    </CSSTransition>
                </TransitionGroup>
            )}/>
                
        )
    }
}

export default App;
