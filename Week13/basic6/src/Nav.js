import React, { Component } from 'react';
//Import component from material-ui
//Moon icon component
import NightsStayIcon from '@material-ui/icons/NightsStay';
//Bulb icon component
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import Switch from '@material-ui/core/Switch';
//Import for select Component
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from "@material-ui/styles";
import style from "./stylesheet/Nav";

class Nav extends Component {
    render() {
        const { classes } = this.props;
        return (
            <nav className={classes.nav_root}>
                <div className={classes.leftContainer}>
                    <h1>Tic Tac Toe</h1>
                    {this.props.isNight ? <NightsStayIcon/> : < WbIncandescentIcon/>}
                    <Switch
                        checked={this.props.isNight}
                        onChange={this.props.handleChange}
                        name="isNight"
                    />
                </div>
                <div>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.props.playerSymbol}
                        onChange={this.props.handleSelectChange}
                    >
                        <MenuItem value={'X'}>X(Cross)</MenuItem>
                        <MenuItem value={'O'}>O(Nought)</MenuItem>
                    </Select>
                </div>
            </nav>
        );
    }
}

export default withStyles(style)(Nav);
