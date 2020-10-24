import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";

const style = {
    footer: {
        position: "relative",
        height: "4vh",
        width: "100%",
        display: "flex",
        padding: "0 5%",
        justifyContent: "flex-end",
    },
    ele: {
        marginRight: "10px",
    }
}

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
