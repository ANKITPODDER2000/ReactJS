import React, { Component } from 'react';
import MiniPalette from "./MiniPalette";
import { withRouter , Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import style from "./stylesheet/PaletteList";
import { v4 as uuid } from "uuid";

class PaletteList extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <nav className={classes.nav}>
                    <h1>ReactColors</h1>
                    <Link to="/palette/new">Create New Palette</Link>
                </nav>
                <div className={classes.container}>
                    {this.props.color.map(color => 
                        <MiniPalette
                            key={uuid()}
                            {...color}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default withStyles(style)(withRouter(PaletteList));
