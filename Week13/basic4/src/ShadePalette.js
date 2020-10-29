import React, { Component } from 'react';
import ColorBox from "./ColorBox";
import { withStyles } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Nav from "./Nav";
import Footer from "./Footer";
import style from "./stylesheet/ShadePalette";

class ShadePalette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format : 'hex'
        }
        this.handleFormat = this.handleFormat.bind(this);
    }
    handleFormat(evt) {
        this.setState({
            format : evt.target.value
        })
    }
    render() {
        let { colors, paletteId ,classes , paletteName} = this.props;
        let colorbox = colors.map(color =>
            <ColorBox
                key={uuid()}
                background={color[this.state.format]}
                name={color.name}
                paletteId={paletteId}
                colorId={color.id}
                sizeBig = {true}
            />
        );
        return (
            <div className={classes.root}>
                {/*Navbar Section*/}
                <Nav
                    value={this.state.value}
                    handleFormat={this.handleFormat}
                    sizeBig = {true}
                />
                {/*COLOR SHOWING*/}
                <div className={classes.colorId}>
                    {colorbox}
                    <div className={classes.goHome}>
                        <p
                            onClick={() => this.props.history.goBack()}
                        >GO BACK!</p>
                    </div>
                </div>
                
                {/*FOOTER SECTION*/}
                <Footer
                    paletteName={paletteName}
                    emoji = {this.props.emoji}
                />
            </div>
        );
    }
}

export default withStyles(style)(withRouter(ShadePalette));
