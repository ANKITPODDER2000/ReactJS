import React, { Component } from 'react';
import ColorBox from "./ColorBox";
import { withStyles } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Nav from "./Nav";
import Footer from "./Footer";

const style = {
    root: {
        position: 'relative',
        width: "100%",
        height: "100vh",
        overflow: "hidden",
    },
    colorId: {
        position: "relative",   
        width: "100%",
        height: "90vh",
    },
    goHome: {
        position: 'absolute',
        width: '20%',
        height:' 50%',
        background: '#000',
        display: 'inline-block',
        marginBottom: '-4px',
        cursor: 'pointer',
        '& a': {
            position: 'absolute',
            top: "50%",
            left: "50%",
            transform: "translate(-50% , -50%)",
            padding: "7px 20px",
            border: "2px solid #fff",
            fontWeight: "bolder",
            color : '#fff',
            transition : "0.5s",
            "&:hover": {
                background: "#fff",
                color : "#000"
            }
        }
    }
}

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
        let { colors, emoji, paletteId ,classes} = this.props;
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
                        <a
                            onClick={() => this.props.history.goBack()}
                        >GO BACK!</a>
                    </div>
                </div>
                
                {/*FOOTER SECTION*/}
                <Footer
                    paletteName={paletteId}
                    emoji = {this.props.emoji}
                />
            </div>
        );
    }
}

export default withStyles(style)(withRouter(ShadePalette));
