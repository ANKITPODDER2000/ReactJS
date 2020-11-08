import React, { Component } from 'react';
import ChatHeader from "./ChatHeader";
import ChatBox from "./ChatBox";
import TypeMsg from "./TypeMsg";
import { withStyles } from "@material-ui/styles";
import Style from "./styles/Chat";


class Chat extends Component {
    render() {
        //console.log(this.props);
        const { classes } = this.props;
        return (
            <div className={classes.chat}>
                {/*Chat Header*/}
                <ChatHeader id={ this.props.id }/>
                {/*Chat Box*/}
                <ChatBox id={ this.props.id }/>
                {/*Typying section*/}
                <TypeMsg id={ this.props.id }/>
            </div>
        );
    }
}

export default withStyles(Style)(Chat);