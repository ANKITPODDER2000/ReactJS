import React, { Component } from 'react';
import { Avatar } from '@material-ui/core';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { withStyles } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import style from "./styles/ChatOptions";

class ChatOptions extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.history.push(`/chat/${this.props.id}`);
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.chat_options} onClick={ this.handleClick }>
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

export default withStyles(style)(withRouter(ChatOptions));