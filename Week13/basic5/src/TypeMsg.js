import React, { Component } from 'react';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import { withStyles } from "@material-ui/styles";
import style from "./styles/TypeMsg";

class TypeMsg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            value : e.target.value
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <EmojiEmotionsIcon style={{color : '#33383B' , fontSize : '30px',cursor : 'pointer'}}/>
                <form className={classes.form}>
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
