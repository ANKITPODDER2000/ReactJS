import React, { Component } from 'react';
import MiniPalette from "./MiniPalette";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import style from "./stylesheet/PaletteList";

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
