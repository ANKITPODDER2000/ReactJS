import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";
import style from "./styles/ChatBox";

class ChatBox extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div>
                    <div className={classes.msgDiv}>
                        <p>Hi I am ankit Podder I am form Kolkata , west bengal , I want to talk to u.</p>
                        <p>12.05 pm</p>
                    </div>
                </div>
                <div className={`container ${true && classes.sendbymeContainer}`}>
                    <div className={`${classes.msgDiv} ${true && classes.sendbyme}`}>
                        <p>Hi I am ankit Podder I am form Kolkata , west bengal , I want to talk to u.</p>
                        <p>12.05 pm</p>
                    </div>
                </div>
                <div>
                    <div className={classes.msgDiv}>
                        <p>Hi I am ankit Podder I am form Kolkata , west bengal , I want to talk to u.</p>
                        <p>12.05 pm</p>
                    </div>
                </div>
                <div className={`container ${true && classes.sendbymeContainer}`}>
                    <div className={`${classes.msgDiv} ${true && classes.sendbyme}`}>
                        <p>Hi I am ankit Podder I am form Kolkata , west bengal , I want to talk to u.</p>
                        <p>12.05 pm</p>
                    </div>
                </div>
                <div>
                    <div className={classes.msgDiv}>
                        <p>Hi I am ankit Podder I am form Kolkata , west bengal , I want to talk to u.</p>
                        <p>12.05 pm</p>
                    </div>
                </div>
                <div className={`container ${true && classes.sendbymeContainer}`}>
                    <div className={`${classes.msgDiv} ${true && classes.sendbyme}`}>
                        <p>Hi I am ankit Podder I am form Kolkata , west bengal , I want to talk to u.</p>
                        <p>12.05 pm</p>
                    </div>
                </div>
                <div>
                    <div className={classes.msgDiv}>
                        <p>Hi I am ankit Podder I am form Kolkata , west bengal , I want to talk to u.</p>
                        <p>12.05 pm</p>
                    </div>
                </div>
                <div className={`container ${true && classes.sendbymeContainer}`}>
                    <div className={`${classes.msgDiv} ${true && classes.sendbyme}`}>
                        <p>Hi I am ankit Podder I am form Kolkata , west bengal , I want to talk to u.</p>
                        <p>12.05 pm</p>
                    </div>
                </div>
                <div>
                    <div className={classes.msgDiv}>
                        <p>Hi I am ankit Podder I am form Kolkata , west bengal , I want to talk to u.</p>
                        <p>12.05 pm</p>
                    </div>
                </div>
                <div className={`container ${true && classes.sendbymeContainer}`}>
                    <div className={`${classes.msgDiv} ${true && classes.sendbyme}`}>
                        <p>Hi I am ankit Podder I am form Kolkata , west bengal , I want to talk to u.</p>
                        <p>12.05 pm</p>
                    </div>
                </div>
                <div>
                    <div className={classes.msgDiv}>
                        <p>Hi I am ankit Podder I am form Kolkata , west bengal , I want to talk to u.</p>
                        <p>12.05 pm</p>
                    </div>
                </div>
                <div className={`container ${true && classes.sendbymeContainer}`}>
                    <div className={`${classes.msgDiv} ${true && classes.sendbyme}`}>
                        <p>Hi I am ankit Podder I am form Kolkata , west bengal , I want to talk to u.</p>
                        <p>12.05 pm</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(style)(ChatBox);
