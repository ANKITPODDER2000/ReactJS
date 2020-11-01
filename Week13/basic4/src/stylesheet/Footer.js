import Res from "./Const";
export default {
    footer: {
        position: "relative",
        height: "4vh",
        width: "100%",
        display: "flex",
        padding: "0 5%",
        justifyContent: "flex-end",
        background : '#fff',
    },
    ele: {
        marginRight: "10px",
    },
    goBackHome: {
        fontSize: '16px',
        position: 'absolute',
        left: '10px',
        display: 'none',
        lineHeight: '4vh',
        cursor: 'pointer',
        [Res.media('640')]: {
            display : 'inline-block'
        }
    }
}