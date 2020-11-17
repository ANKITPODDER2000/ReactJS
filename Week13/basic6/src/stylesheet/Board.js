import Res from "./Responsive";
export default {
    "@global": {
        ".table": {
            margin: '50px auto 0',
            width: '300px',
            height: '306.5px',
            position: 'relative',
        },
        "table": {
            position: 'relative',
            width : '300px',
            height: '300px',
            background:' transparent',
        },
        'table tr': {
            position: 'relative',
            width: '100%',
            height: '100px',
            border: 'none',
        },
        'table tr td': {
            position: 'relative',
            height: '100px',
            width: '100px',
            color: props => props.isNight ? '#fff' : '#000',
            textAlign: 'center',
            fontSize: '40px',
            fontFamily: "srif"
        },
        'table tr:nth-child(1) td': {
            borderBottom: props => props.isNight ? "2px solid #fff" : '2px solid #000',
        },
        'table tr:nth-child(3) td': {
            borderTop: props => props.isNight ? "2px solid #fff" : '2px solid #000',
        },
        'table tr td.right': {
            borderRight: props => props.isNight ? "2px solid #fff" : '2px solid #000',
        },
        'table tr td.left': {
            borderLeft: props => props.isNight ? "2px solid #fff" : '2px solid #000',
        },
        '::placeholder': {
            color: props => props.isNight ? '#fff7' : '#0007'
        },
        '.MuiButtonBase-root': {
            [Res('480')]: {
                fontSize : '14px'
            },
            [Res('410')]: {
                fontSize : '11px'
            },
            [Res('330')]: {
                fontSize : '10px'
            }
        },
        ".span" : {
            background: props => props.result === props.playername ? '#32CD32' : '#f00',
            zIndex : '10'
        },
        ".help": {
            color : props => props.result === props.playername ? '#32CD32' : '#f00',
        }
    },
    container: {
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 60px)',
        background: props => props.isNight ? '#000' : '#fff',
        padding: '10px 0'
    },
    formContainer: {
        position: 'relative',
        width: '80%',
        margin :'20px auto 0',
        padding: '25px 10%',
        background: props => props.isNight ? '#fff8' : '#0002',
        textAlign: 'center',
        [Res('1105')]: {
            padding : '20px'
        },
        [Res('901')]: {
            width: '95%'
        },
        [Res('432')]: {
            padding : '20px 10px'
        },
        '& h1': {
            [Res('731')]: {
                fontSize : '16px'
            },
            [Res('432')]: {
                fontSize: '14px',
                marginRight : '10px'
            }
        },
        
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px',
        '& h1': {
            marginRight: '20px',
            textTransform: 'uppercase',
            fontFamily: 'Poppins, sans-serif'
        },
    },
    bottomContainer: {
        position:' relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        "& input" : {
            background: 'none',
            border: 'none',
            outline: 'none',
            borderBottom: '2px solid #f50057',
            height: '36px',
            padding: '4px 15px',
            marginRight: '20px',
            fontSize: '18px',
            width: '250px',
            fontFamily: 'Poppins, sans-serif',
            [Res('480')]: {
                fontSize: '12px',
                padding: '4px 8px',
                width:'200px'
            },
            [Res('420')]: {
                width:'160px'
            },
        }
    },
    btn: {
        margin : '0 15px'
    },
    btnStart: {
        [Res('330')]: {
            padding : '5px 10px'
        }
    },
    select: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: '15px',
        '& h2': {
            marginRight: '20px',
            [Res('731')]: {
                fontSize : '20px'
            }
        }
        
    }
}