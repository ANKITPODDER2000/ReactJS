import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";
import db from "./firebase";
import style from "./styles/ChatBox";

class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array_chat : []
        }
        this.findChats = this.findChats.bind(this);
    }
    async findChats(id) {
        let array_chat = await db
            .collection('chats')
            .doc(id)
            .collection('msgList')
            .orderBy('time', 'asc')
            .get()
            .then(function (query) {
                let array_ = [];
                query.forEach(function (doc) {
                    array_.push(doc.data())
                })
                return array_;
            })
        this.setState({array_chat : array_chat})
    }
    componentDidMount() {
        this.findChats(this.props.id);
    }
    componentDidUpdate() {
        this.findChats(this.props.id);
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                {this.state.array_chat.map(sms => 
                    <div className={`container ${sms.sendbyme && classes.sendbymeContainer}`}>
                        <div className={`${classes.msgDiv} ${sms.sendbyme && classes.sendbyme}`}>
                            <p>{sms.text}</p>
                            <p>{new Date(sms.time?.toDate()).toTimeString().slice(0,5)}</p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default withStyles(style)(ChatBox);
