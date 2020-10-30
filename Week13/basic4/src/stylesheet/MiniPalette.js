import Res from "./Const";
export default {
    container: {
        position : "relative",
        width : "200px",
        height : "220px",
        background: "#fff",
        margin: "20px 30px",
        paddingTop: "10px",
        cursor: 'pointer',
        boxShadow: "5px 5px 10px #0006",
        transition : "0.5s",
        "&:hover": {
            boxShadow: "5px 5px 10px #000"
        },
        "&:hover div:nth-child(2)": {
            opacity : 1
        }
    },
    colorContainer : {
        position: 'relative',
        width: "180px",
        height: "150px",
        background: "#0005",
        margin: "0px auto",
        display: "block",
        boxShadow: "2px 2px 6px #0007",
        transition : "0.5s",
        "&:hover": {
            boxShadow : "2px 2px 6px #000"
        },
        "&:hover ~ div:nth-child(2)": {
            boxShadow : "2px 2px 6px #000"
        }
    },
    smallColorContainer: {
        position: 'relative',
        display: "inline-block",
        width: "20%",
        height: "25%",
        margin: "0 auto",
        marginBottom : "-4px"
    },
    details: {
        position: 'relative',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "70px",
        padding : "0 10px"
    },
    deleteContainer: {
        position: 'absolute',
        right: '0',
        top: '0',
        background: 'red',
        width: '32px',
        height: '32px',
        zIndex: '10',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        boxShadow: "2px 2px 6px #0007",
        opacity: '0',
        [Res.media(460)]: {
            opacity : 1
        },
        transition : '0.4s ease-in',
        "& svg" : {
            fontSize : '18px'
        }
    }
}