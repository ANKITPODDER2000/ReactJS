import React, { Component } from 'react';
import {Avatar , IconButton} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { withStyles } from "@material-ui/styles";

const style = {
    "@global": {
        '.MuiButtonBase-root.MuiIconButton-root' : {
            padding : '10px',
            margin: '0 3px',
        }
    },
    sidebar_header : {
        position: 'relative',
        width: '100%',
        height: '70px',
        padding: '0 10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#2A2F32',
    }
}

class SidebarHeader extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.sidebar_header}>
                <Avatar style={{fontSize : '24px'}}/>
                <div className="sidebar_header_right">
                    <IconButton>
                        <DonutLargeIcon style={{fontSize : '24px' , color : '#B1B3B5'}}/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon style={{fontSize : '24px' , color : '#B1B3B5'}}/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon style={{fontSize : '24px' , color : '#B1B3B5'}}/>
                    </IconButton>
                </div>
            </div>
        );
    }
}

export default withStyles(style)(SidebarHeader);
