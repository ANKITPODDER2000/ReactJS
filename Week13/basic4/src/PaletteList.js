import React, { Component } from 'react';
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import bg from "./bg.svg";

const style = {
    root: {
        position: 'relative',
        width: "100%",
        minHeight: "100vh",
        background: "blue",
        background : `url(${bg})`
    },
    nav: {
        position: 'relative',
        width: "100 %",
        height : "60px",
        background: "#fff3",
        padding: "0 10%",
        "& h1": {
            color: "#fff",
            padding: "0 15px",
            transition: "0.5s",
            height: "100%",
            lineHeight: "60px",
            cursor: 'pointer',
            "&:hover": {
                background : "#fff5",
            }
        },
        
    },
    container: {
        position: 'relative',
        width: "80%",
        margin: "30px auto 0",
        display: "flex",
        justifyContent: "flex-start",
        flexWrap : "wrap"
    }
}

class PaletteList extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <nav className={classes.nav}>
                    <h1>ReactColors</h1>
                </nav>
                <div className={classes.container}>
                    {this.props.color.map(color => 
                        <MiniPalette {...color} />
                    )}
                </div>
            </div>
        );
    }
}

export default withStyles(style)(withRouter(PaletteList));
