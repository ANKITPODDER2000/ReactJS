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
        '& p': {
            position: 'absolute',
            top: "50%",
            left: "50%",
            transform: "translate(-50% , -50%)",
            padding: "7px 20px",
            border: "2px solid #fff",
            fontWeight: "bolder",
            color : '#fff',
            transition : "0.5s",
            "&:hover": {
                background: "#fff",
                color : "#000"
            }
        }
    }
}