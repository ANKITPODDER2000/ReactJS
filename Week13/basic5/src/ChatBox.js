import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";
import bg from "./background.png";

const style = {
    container: {
        position: 'relative',
        width: '100%',
        height : 'calc(100% - 120px)',
        background: `url(${bg}) #0008`,
        padding : '20px 30px 10px 30px',
    },
    msgDiv: {
        position: 'relative',
        padding: '7px 14px',
        width: 'fit-content',
        background : '#fff',
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '80%',
        marginBottom:'15px',
        "& p:nth-child(1)": {
            marginRight: '15px',
            maxWidth: 'calc(100% - 70px)',
            wordBreak: 'break-word'
        },
        "& p:nth-child(2)": {
            fontSize: 12,
            display: 'flex',
            alignItems: 'flex-end'
        }
    },
    sendbyme :{
        float: 'right',
        //background: #00AF9C
        background: '#054740',
        color: '#fff',
    }
}

class ChatBox extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.msgDiv}>
                    <p>Hi I am ankit Podder I am form Kolkata , west bengal , I want to talk to u.</p>
                    <p>12.05 pm</p>
                </div>
                <div className={`${classes.msgDiv} ${true && classes.sendbyme}`}>
                    <p>Hi I am ankit Podder I am form Kolkata , west bengal , I want to talk to u.</p>
                    <p>12.05 pm</p>
                </div>
            </div>
        );
    }
}

export default withStyles(style)(ChatBox);
