import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/styles";
import style from "./stylesheet/ColorBox";

class ColorBox extends Component {
    static defaultProps = {
        sizeBig : false
    }
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
        const { background, name, paletteId, colorId, classes } = this.props;
        //console.log(chroma(background).luminance());
        return (
            <div className={classes.ColorBox} style={{background:background}}>
                <div className={`${classes.overlay} ${this.state.copied && classes.activeOverlay}`} style={{background:background}} />
                <div className={`${classes.copyMsg}  ${this.state.copied && classes.activeMsg}`}>
                    <h1>Copied!</h1>
                    <p>{background}</p>
                </div>
                <div className={classes.copyContainer}>
                    <div className={classes.boxContent}>
                        <span>{name}</span>
                    </div>
                    <CopyToClipboard text={background} onCopy={this.handleCopy}>
                        <button className={classes.copyBtn}>Copy</button>
                    </CopyToClipboard>
                </div>
                {!this.props.sizeBig ? <Link
                    to= {`/palette/${paletteId}/${colorId}`}
                    className={classes.seeMore}
                    onClick = {e => e.stopPropagation()}
                >More</Link> : null}
            </div>
        );
    }
}

export default withStyles(style)(ColorBox);
