import chroma from "chroma-js";
import Res from "./Const";
export default{
    root: {
        position: 'relative',
        width: '20%',
        height: '25%',
        margin: '0',
        "&:hover svg": {
            color: props => chroma(props.color).luminance() <= 0.13 ? "#fff" : "#000",
            transform : 'scale(1.4)'
        },
        [Res.media('843')]: {
            width: "25%",
            height : '20%'
        },
        [Res.media('740')]: {
            width: "50%",
            height : '10%'
        },
        [Res.media('430')]: {
            width: "100%",
            height : '5%'
        }
    },
    textContainer: {
        position : 'relative',
        width: '100%',
        height: '100%',
        bottom: '0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'flex-end',
        padding: '10px',
        [Res.media('430')]: {
            padding: '0 10px',
            alignItems:'center',
        },
        "& p" : {
            fontSize: '16px',
            color: props => chroma(props.color).luminance() <= 0.13 ? "#fff" : "#000",
            position: 'relative',
            width: '80%',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            wordBreak: 'break-all',
            [Res.media('430')]: {
                alignItems:'center',
            }
        },
    },
    icon: {
        fontSize: '18px',
        cursor: 'pointer',
        transition: '0.3s ease-in',
        color: props => chroma(props.color).luminance() <= 0.13 ? "#fff9" : "#0009",
    }
}