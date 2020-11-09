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

const style = {
    "@global": {
        ".MuiInput-underline::before": {
            borderColor: props => props.isNight ? '#fff' : '#000',
            "&:hover" : {
                borderColor: props => props.isNight ? '#fff' : '#000',
            }
        },
        '.MuiInputBase-root': {
            color :props => props.isNight ? '#fff' : '#000',
        },
        '.MuiMenu-list': {
            color :props => props.isNight ? '#fff' : '#000',
            background :props => props.isNight ? '#000' : '#fff',
        },
        '.MuiSvgIcon-root': {
            color :props => props.isNight ? '#fff' : '#000',
        },
        '.MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover':{
            background:props => props.isNight ? '#fff2' : 'rgba(0,0,0,0.04)'
        }
    },
    nav_root: {
        position: 'relative',
        width: '100%',
        height: '60px',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        background: props => props.isNight ? '#000' : '#fff',
        boxShadow:  props => props.isNight ? '0 10px 10px #fff2' : '0 10px 10px #0002',
    },
    leftContainer: {
        position: 'relative',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        '& h1': {
            marginRight: '20px',
            color : props => props.isNight ? '#fff' : '#000',
        },
        '& svg': {
            marginRight: '10px',
            color : props => props.isNight ? '#fff' : '#000',
        }
    }
}

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
