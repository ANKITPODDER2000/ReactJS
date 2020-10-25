import bg from "./bg.svg";
export default {
    root: {
        position: 'relative',
        width: "100%",
        minHeight: "100vh",
        background : `url(${bg})`
    },
    nav: {
        position: 'relative',
        width: "100 %",
        height : "60px",
        background: "#fff3",
        padding: "0 10%",
        "& h1": {
            color: "#fff",
            padding: "0 15px",
            transition: "0.5s",
            height: "100%",
            lineHeight: "60px",
            cursor: 'pointer',
            display : "inline-block",
            "&:hover": {
                background : "#fff5",
            }
        },
        
    },
    container: {
        position: 'relative',
        width: "80%",
        margin: "30px auto 0",
        display: "flex",
        justifyContent: "flex-start",
        flexWrap : "wrap"
    }
}