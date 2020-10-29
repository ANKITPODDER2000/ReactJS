import chroma from "chroma-js";
import Size from "./Const";
export default {
    ColorBox: {
        position: 'relative',
        width: '20%',
        height: props => props.sizeBig ? "50%" : "25%",
        display: 'inline-block',
        margin: '0 auto',
        marginBottom: '-4px',
        [Size.media('1200')]: {
            width: '25%',
            height: props => props.sizeBig ? "50%" : "20%",
        },
        [Size.media('980')]: {
            width: '50%',
            height: props => props.sizeBig ? "50%" : "10%",
        },
        [Size.media('580')]: {
            width: '100%',
            height: props => props.sizeBig ? "50%" : "5%",
        }
    },
    copyBtn : {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100px',
        height: '30px',
        transform: 'translate(-50%,-50%)',
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
        transition: '0.5s',
        [Size.media('580')]: {
            height:'100%'
        },
        [Size.media('420')]: {
            width: '70px'
        }
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
            [Size.media('340')]: {
                fontSize : '3.5rem'
            }
        },
        "& p" : {
            fontSize: '2rem',
            fontWeight: '100',
            color: props => chroma(props.background).luminance() <= 0.13 ? "#fff" : "#000",
            [Size.media('340')]: {
                fontSize : '1.5rem'
            }
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
        transition: '0.5s',
        [Size.media('580')]: {
            height:'100%'
        }
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
        [Size.media('420')]: {
            width: '140px',
            padding: '0',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign:'center'
        },
        "& span": {
            [Size.media('420')]: {
                fontSize: '10px'
            },
            [Size.media('340')]: {
                fontSize: '8px'
            }
        }
    }
}