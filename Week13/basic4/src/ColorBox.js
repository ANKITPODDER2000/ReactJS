import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/styles";
import chroma from "chroma-js";
import Nav from "./Nav";

const style = {
    ColorBox : {
        position: 'relative',
        width: '20%',
        height: props => props.sizeBig ? "50%" : "25%",
        display: 'inline-block',
        margin: '0 auto',
        marginBottom: '-4px',
    },
    copyBtn : {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100px',
        height: '30px',
        transform: 'translate(-50%,-50%)',
        background: 'none',
        border: 'none',
        outline: 'none',
        background: props => chroma(props.background).luminance() <= 0.13 ? "#fff3" : "#0003",
        color: props => chroma(props.background).luminance() <= 0.13 ? "#fff" : "#000",
        textAlign: 'center',
        lineHeight: '30px',
        cursor: 'pointer',
        fontSize: '1rem',
        textTransform: 'uppercase',
        opacity: '0',
        transition: '0.5s'
    },
    copyContainer : {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        "&:hover": {
            "& button": {
                opacity: '1',
            }
        }
    },
    copyMsg : {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100vh',
        zIndex: '15',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        transform: 'scale(0.1)',
        opacity:' 0',
        pointerEvents: 'none',
        "& h1" : {
            fontSize: '5rem',
            color: props => chroma(props.background).luminance() <= 0.13 ? "#fff" : "#000",
            textShadow: props => chroma(props.background).luminance() <= 0.13
                ? '1px 2px #000'
                : '1px 2px #fff',
            padding: '1rem',
            background:  props => chroma(props.background).luminance() <= 0.13 ? "#fff3" : "#0002",
            width: '100%',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: '400',
        },
        "& p" : {
            fontSize: '2rem',
            fontWeight: '100',
            color: props => chroma(props.background).luminance() <= 0.13 ? "#fff" : "#000",
        }
    },
    activeMsg : {
        opacity: '1',
        transform: 'scaleX(1)',
        transition: '0.5s 0.3s ease-in-out',
    },
    overlay : {
        zIndex: '1',
        opacity: '0',
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        transition: 'transform 0.6s ease-in-out',
        position:' relative',
        transform:' scale(0.1)',
        position: 'relative',
        top: '0',
        left: '0',
    },
    activeOverlay : {
        opacity: '1',
        transform: 'scale(50)',
        position:' absolute',
    },
    seeMore : {
        position: 'absolute',
        right: '0',
        bottom: '0',
        width: '60px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
        background: props => chroma(props.background).luminance() <= 0.13 ? "#0004" : "#fff4",
        textDecoration: 'none',
        color: props => chroma(props.background).luminance() <= 0.13 ? "#fff" : "#0008",
    },
    boxContent : {
        position: 'absolute',
        bottom: '0',
        left: '0',
        padding: '10px',
        width: '100%',
        fontSize: '12px',
        letterSpacing: '1px',
        textTransform: ' uppercase',
        color: props => chroma(props.background).luminance() <= 0.13 ? "#fff" : "#000",
    }
}

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
