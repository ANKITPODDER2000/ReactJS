import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ClearIcon from '@material-ui/icons/Clear';
import { Avatar , IconButton } from "@material-ui/core";

const style = {
    container: {
        position: 'relative',
        width : '100%',
        height : '70px',
        background: '#2A2F32',
        borderLeft: '1.7px solid #3F4448',
        padding: '0 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color : '#fff'
    },
    leftContainer: {
        position: 'relative',
        maxWidth: '50%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
    },
    rightContainer: {
        position: 'relative',
        maxWidth: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
}

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
