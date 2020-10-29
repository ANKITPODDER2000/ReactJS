import chroma from "chroma-js";
export default{
    root: {
        position: 'relative',
        width: '20%',
        height: '25%',
        display: 'inline-block',
        margin: '0 auto',
        marginBottom: '-5.3px',
        "&:hover svg": {
            color: props => chroma(props.color).luminance() <= 0.13 ? "#fff" : "#000",
            transform : 'scale(1.4)'
        }
    },
    textContainer: {
        position : 'absolute',
        width: '100%',
        height: '40px',
        bottom: '0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems : 'center',
        padding: '0 15px',
        "& p" : {
            fontSize: '16px',
            color: props => chroma(props.color).luminance() <= 0.13 ? "#fff" : "#000",
        },
    },
    icon: {
        fontSize: '18px',
        cursor: 'pointer',
        transition: '0.3s ease-in',
        color: props => chroma(props.color).luminance() <= 0.13 ? "#fff9" : "#0009",
    }
}