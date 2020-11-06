import React, { Component } from 'react';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import { withStyles } from "@material-ui/styles";

const style = {
    container: {
        position: 'relative',
        width: '100%',
        height: '50px',
        background: '#1E2428',
        borderLeft: '1.7px solid #3F4448',//#33383B
        display:'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding : '0 20px'
    },
    form: {
        position: 'relative',
        width: '90%',
        height: '70%',
        background: '#33383B',
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "& input": {
            marginLeft: '15px',
            border: 'none',
            background: 'none',
            outline: 'none',
            height: '100%',
            width:'calc(100% - 80px)',
            position: 'relative',
            color: '#fff',
            letterSpacing: '1px',
            fontFamily : 'consolas'
        }
    }
}

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
