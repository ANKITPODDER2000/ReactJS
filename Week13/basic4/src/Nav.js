import React, { Component } from 'react';
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./stylesheet/Nav.css";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: "hex",
            open: false
        }
        this.handleFormat_ = this.handleFormat_.bind(this);
        this.close = this.close.bind(this);
    }
    handleFormat_(evt) {
        this.setState({
            format: evt.target.value,
            open : true
        })
        this.props.handleFormat(evt);
    }

    close() {
        this.setState({
            open : false,
        })
    }
    render() {
        return (
            <nav>
                <div className="logo">
                    <a href="">ReactColorPicker</a>
                </div>
                <div className="level">
                    <span>Level : {this.props.value}</span>
                </div>
                <div className="slider">
                    <Slider
                        defaultValue={this.props.value}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange = {this.props.handleChange}
                    />
                </div>
                <Select value={this.state.format} onChange={this.handleFormat_}>
                    <MenuItem value="hex">HEX - #ffffff</MenuItem>
                    <MenuItem value="rgb">rgb - rgb(255 , 255 , 255)</MenuItem>
                    <MenuItem value="rgba">rgba - rgba(255 , 255 , 255 ,1)</MenuItem>
                </Select>
                <Snackbar
                    anchorOrigin={{vertical:"bottom" , horizontal:"left"}}
                    open={this.state.open}
                    message={
                        <span id="message-id">Format Changed!</span>
                    }
                    ContentProps={{
                        "aria-describedby":'message-id'
                    }}
                    onClose={() => {
                        setTimeout(() => {
                            this.close()
                        } , 3000)
                    }}
                    action={[
                        <IconButton
                            onClick={this.close}
                            color="inherit"
                            key="close"
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </nav>
        );
    }
}

export default Nav;
