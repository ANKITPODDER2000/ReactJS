import React, { Component } from 'react';
import ChatOptions from "./ChatOptions";
import { withStyles } from "@material-ui/styles";

const style = {
    sidebar_chat: {
        position: "relative",
        width: '100%',
        height: 'calc(100% - 120px)',
        background: '#2D3134',
        borderTop : '1px solid #3F4448'
    }
}

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
