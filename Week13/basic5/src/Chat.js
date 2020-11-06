import React, { Component } from 'react';
import ChatHeader from "./ChatHeader";
import ChatBox from "./ChatBox";
import TypeMsg from "./TypeMsg";
import { withStyles } from "@material-ui/styles";
import Style from "./styles/Chat";


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
