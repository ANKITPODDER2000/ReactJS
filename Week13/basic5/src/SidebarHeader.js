import React, { Component } from 'react';
import {Avatar , IconButton} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { withStyles } from "@material-ui/styles";
import style from "./styles/SidebarHeader";

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
