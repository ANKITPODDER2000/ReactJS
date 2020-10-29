import Size from "./Const";
export default {
    root: {
        position: 'relative',
        width: "100%",
        height: "100vh",
        overflow: "hidden",
    },
    colorId: {
        position: "relative",   
        width: "100%",
        height: "90vh",
    },
    goHome: {
        position: 'absolute',
        width: '20%',
        height:' 50%',
        background: '#000',
        display: 'inline-block',
        marginBottom: '-4px',
        cursor: 'pointer',
        background: '#0009',
        [Size.media('980')]: {
            width: "50%",
            height: '20%'
        },
        [Size.media('580')]: {
            position: 'relative',
            display: 'block',
            width: '100%',
            height: '10%',
        },
        '& p': {
            position: 'absolute',
            top: "50%",
            left: "50%",
            transform: "translate(-50% , -50%)",
            padding: "7px 0px",
            width: '120px',
            textAlign: 'center',
            letterSpacing:'1px',
            border: "2px solid #fff",
            fontWeight: "bolder",
            color : '#fff',
            transition : "0.5s",
            "&:hover": {
                background: "#fff",
                color : "#000"
            },
            [Size.media('980')]: {
                fontSize: '12px',
                border: "1.25px solid #fff",
                letterSpacing : '1px'
            },
        }
    }
}