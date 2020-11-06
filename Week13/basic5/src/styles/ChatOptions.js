export default {
    chat_options: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80px',
        cursor: 'pointer'
    },
    img_container: {
        margin : '0 15px'
    },
    container: {
        position: 'relative',
        width: 'calc(100% - 70px)',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection : 'column'
    },
    nameContainer: {
        position: 'relative',
        width: '100%',
        padding: '0 20px 0 10px',
        marginBottom: '5px',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        "& p": {
            fontSize : 12
        },
        "& p.notSeen": {
            color : '#00AF9C'
        }
    },
    textContainer: {
        position: 'relative',
        width: '100%',
        paddingLeft: 10,
        color: '#fff',
        fontSize: 12,
        display: 'flex',
        "& p.notSeen": {
            color : '#00AF9C'
        }
    },
    lastBound: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '95%',
        display: "block",
        height: '1.3px',
        background : '#3F4448',
    }
}