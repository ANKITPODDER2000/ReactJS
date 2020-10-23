import React, { Component } from 'react';
import "./stylesheet/ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copied : false,
        }
        this.handleCopy = this.handleCopy.bind(this);
    }
    handleCopy() {
        this.setState({
            copied : true
        }, () => {
            setTimeout(() => {
                this.setState({
                    copied : false
                })
            } , 1500)
        })
    }
    render() {
        const { background, name } = this.props;
        return (
            <div className="ColorBox" style={{background:background}}>
                <div className={`overlay ${this.state.copied && "active"}`} style={{background:background}} />
                <div className={`copy-msg ${this.state.copied && "active"}`}>
                    <h1>Copied!</h1>
                    <p>{background}</p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <CopyToClipboard text={background} onCopy={this.handleCopy}>
                        <button className="copy-btn">Copy</button>
                    </CopyToClipboard>
                </div>
                <span className="see-more">More</span>
            </div>
        );
    }
}

export default ColorBox;
