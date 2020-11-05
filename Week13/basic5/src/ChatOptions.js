import React, { Component } from 'react';
import { Avatar } from '@material-ui/core';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { withStyles } from "@material-ui/styles";

const style = {
    chat_options: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80px',
        cursor: 'pointer'
    },
    img_container: {
        margin : '0 15px'
    },
    container: {
        position: 'relative',
        width: 'calc(100% - 70px)',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection : 'column'
    },
    nameContainer: {
        position: 'relative',
        width: '100%',
        padding: '0 20px 0 10px',
        justifyContent: 'space-between',
        marginBottom: '5px',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        "& p": {
            fontSize : 12
        },
        "& p.notSeen": {
            color : '#02ff0c'
        }
    },
    textContainer: {
        position: 'relative',
        width: '100%',
        paddingLeft: 10,
        color: '#fff',
        fontSize: 12,
        display: 'flex',
        "& p.notSeen": {
            color : '#02ff0c'
        }
    },
    lastBound: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '95%',
        display: "block",
        height: '1.3px',
        background : '#3F4448',
    }
}

class ChatOptions extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.chat_options}>
                <Avatar
                    src={this.props.chat.img}
                    className={classes.img_container}
                />
                <div className={classes.container}>
                    <div className={classes.nameContainer}>
                        <h4>{this.props.chat.name}</h4>
                        <p
                            className={`msg ${!this.props.chat.last_message.sendbyme && "notSeen"}`}
                        >
                            {this.props.chat.time}
                        </p>
                    </div>
                    <div className={classes.textContainer}>
                        {this.props.chat.last_message.sendbyme ?
                            <DoneAllIcon style={{ fontSize: '16px', marginRight: '7px' }} /> :
                            null
                        }
                        <p
                            className={`msg ${!this.props.chat.last_message.sendbyme && "notSeen"}`}
                        >
                            {this.props.chat.last_message.text}
                        </p>
                    </div>
                    <span className={classes.lastBound}></span>
                </div>
            </div>
        );
    }
}

export default withStyles(style)(ChatOptions);
