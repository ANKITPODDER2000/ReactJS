import Res from "./Const";
import bg from "./bg.svg";
export default {
    "@global":{
        ".fade-exit":{
            opacity : 1
        },
        ".fade-exit-active":{
            opacity : 0,
            transition : 'opacity 500ms ease-out'
        }
    },
    root: {
        position: 'relative',
        width: "100%",
        minHeight: "100vh",
        background: `url(${bg})`,
        [Res.media('450')]: {
            paddingBottom : 50
        }
    },
    nav: {
        position: 'relative',
        top: 0,
        left: 0,
        zIndex:100,
        width: "100%",
        height : "60px",
        background: "#fff3",
        padding: "0 10%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        [Res.media('500')]: {
            padding : '0 20px'  
        },
        [Res.media('340')]: {
            padding : '0 10px'  
        },
        "& h1 , & a": {
            color: "#fff",
            padding: "0 15px",
            transition: "0.5s",
            height: "100%",
            lineHeight: "60px",
            cursor: 'pointer',
            display: "inline-block",
            textDecoration : "none",
            "&:hover": {
                background : "#fff5",
            }
        },
        "& h1":{
            [Res.media('450')]: {
                fontSize : 18
            }
        }
    },
    container: {
        position: 'relative',
        width: "80%",
        paddingTop : 30,
        margin: "0 auto 0",
        display: "flex",
        justifyContent: "flex-start",
        flexWrap : "wrap",
        [Res.media('1085')] : {
            width : '90%'
        },
        [Res.media('963')] : {
            width : '95%'
        },
    }
}