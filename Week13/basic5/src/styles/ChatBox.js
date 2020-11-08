import bg from "../background.png";
export default {
    "@global": {
        '::-webkit-scrollbar' : {
            width: '5px'
        },
        '::-webkit-scrollbar-track':{
            background: 'none'
        },
        '::-webkit-scrollbar-thumb' : {
            background: '#fff7',
            transition : '0.5s'
        },
        '::-webkit-scrollbar-thumb:hover' : {
            background: '#fff'
        }
    },
    container: {
        position: 'relative',
        width: '100%',
        height : 'calc(100% - 120px)',
        background: `url(${bg}) #0008`,
        padding : '20px 30px 10px 30px',
        overflowY: 'scroll'
    },
    msgDiv: {
        position: 'relative',
        padding: '7px 14px',
        width: 'fit-content',
        background : '#fff',
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '80%',
        marginBottom:'15px',
        "& p:nth-child(1)": {
            marginRight: '15px',
            //maxWidth: 'calc(100% - 70px)',
            wordBreak: 'break-word'
        },
        "& p:nth-child(2)": {
            fontSize: 12,
            display: 'flex',
            alignItems: 'flex-end'
        }
    },
    sendbyme :{
        //background: #00AF9C
        background: '#054740',
        color: '#fff',
    },
    sendbymeContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}