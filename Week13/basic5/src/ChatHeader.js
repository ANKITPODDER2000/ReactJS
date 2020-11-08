import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ClearIcon from '@material-ui/icons/Clear';
import { Avatar , IconButton } from "@material-ui/core";
import style from "./styles/ChatHeader";
import db from "./firebase";

class ChatHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "",
            name : ""
        }
        this.getChatPerson = this.getChatPerson.bind(this);
    }
    async getChatPerson() {
        let user_data = await db
            .collection('chats')
            .doc(this.props.id)
            .get()
            .then(function (snapshot) {
                return ({name : snapshot.data().name , img : snapshot.data().img}) 
            })
        this.setState(user_data);
    }
    componentDidUpdate() {
        this.getChatPerson();
    }
    componentDidMount() {
        this.getChatPerson();
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.leftContainer}>
                    <Avatar
                        style={{marginRight : '20px'}}
                        src={this.state.img}
                    />
                    <h3>{ this.state.name }</h3>
                </div>
                <div className={classes.rightContainer}>
                    <IconButton>
                        <AttachFileIcon style={{fontSize : '24px' , color : '#B1B3B5'}}/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon style={{fontSize : '24px' , color : '#B1B3B5'}}/>
                    </IconButton>
                    <IconButton>
                        <ClearIcon style={{fontSize : '24px' , color : '#B1B3B5'}}/>
                    </IconButton>
                </div>
            </div>
        );
    }
}

export default withStyles(style)(ChatHeader);
