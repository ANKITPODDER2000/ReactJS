import React, { Component } from 'react';
import ChatHeader from "./ChatHeader";
import ChatBox from "./ChatBox";
import TypeMsg from "./TypeMsg";
import { withStyles } from "@material-ui/styles";

const Style = {
    chat: {
        position: 'relative',
        width: 'calc(100% - 350px)',
        height : '100%',
    }
}

class Chat extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.chat}>
                {/*Chat Header*/}
                <ChatHeader />
                {/*Chat Box*/}
                <ChatBox />
                {/*Typying section*/}
                <TypeMsg />
            </div>
        );
    }
}

export default withStyles(Style)(Chat);
