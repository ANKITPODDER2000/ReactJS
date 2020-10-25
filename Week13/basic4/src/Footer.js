import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";
import style from "./stylesheet/Footer";

class Footer extends Component {
    render() {
        let { classes } = this.props;
        return (
            <footer className={classes.footer}>
                <p className={classes.ele}>{this.props.paletteName}</p>
                <p>{this.props.emoji}</p>
            </footer>
        );
    }
}

export default withStyles(style)(Footer);
