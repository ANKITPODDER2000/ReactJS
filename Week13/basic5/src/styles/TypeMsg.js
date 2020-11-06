export default {
    container: {
        position: 'relative',
        width: '100%',
        height: '50px',
        background: '#1E2428',
        borderLeft: '1.7px solid #3F4448',//#33383B
        display:'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding : '0 20px'
    },
    form: {
        position: 'relative',
        width: '90%',
        height: '70%',
        background: '#33383B',
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "& input": {
            marginLeft: '15px',
            border: 'none',
            background: 'none',
            outline: 'none',
            height: '100%',
            width:'calc(100% - 80px)',
            position: 'relative',
            color: '#fff',
            letterSpacing: '1px',
            fontFamily : 'consolas'
        }
    }
}