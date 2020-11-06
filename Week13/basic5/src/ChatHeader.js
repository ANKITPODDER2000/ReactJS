import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ClearIcon from '@material-ui/icons/Clear';
import { Avatar , IconButton } from "@material-ui/core";
import style from "./styles/ChatHeader";

class ChatHeader extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.leftContainer}>
                    <Avatar
                        style={{marginRight : '20px'}}
                        src="https://avatars.dicebear.com/api/human/10.svg"
                    />
                    <h3>Ritesh Garodia</h3>
                </div>
                <div className={classes.rightContainer}>
                    <IconButton>
                        <AttachFileIcon style={{fontSize : '24px' , color : '#B1B3B5'}}/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon style={{fontSize : '24px' , color : '#B1B3B5'}}/>
                    </IconButton>
                    <IconButton>
                        <ClearIcon style={{fontSize : '24px' , color : '#B1B3B5'}}/>
                    </IconButton>
                </div>
            </div>
        );
    }
}

export default withStyles(style)(ChatHeader);
