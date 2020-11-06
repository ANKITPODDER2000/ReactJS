import React, { Component } from 'react';
import ChatOptions from "./ChatOptions";
import { withStyles } from "@material-ui/styles";
import style from "./styles/ChatList";

class ChatList extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.sidebar_chat}>
                {this.props.chats.map(chat =>
                    <ChatOptions
                        key={chat.id}
                        chat={chat.data}
                        id={ chat.id}
                    />
                )}
            </div>
        );
    }
}

export default withStyles(style)(ChatList);
