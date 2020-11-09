import React, { Component } from 'react';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import { withStyles } from "@material-ui/styles";
import style from "./styles/TypeMsg";
import db from "./firebase";
import firebase from "firebase";

class TypeMsg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            value : e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        let msg_map = {
            text: this.state.value,
            sendbyme: true,
            time : firebase.firestore.FieldValue.serverTimestamp()
        }
        db.collection('chats').doc(this.props.id).collection('msgList').add(
            msg_map
        )
        db.collection('chats').doc(this.props.id).update({
            "last_message.sendbyme": true,
            "last_message.text": this.state.value
        }).then(
            ()=>this.setState({value : ''})
        ).catch(error => console.log(error.message))
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <EmojiEmotionsIcon style={{color : '#33383B' , fontSize : '30px',cursor : 'pointer'}}/>
                <form
                    className={classes.form}
                    onSubmit = {this.handleSubmit}
                >
                    <input
                        placeholder="Type your Message"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <MicIcon style={{color : 'rgb(97 97 97)' , fontSize : '26px',cursor : 'pointer'}}/>
                </form>
                <SendIcon style={{color : '#33383B' , fontSize : '30px',cursor : 'pointer'}}/>
            </div>
        );
    }
}

export default withStyles(style)(TypeMsg);
