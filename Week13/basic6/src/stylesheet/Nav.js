import Res from "./Responsive";
export default{
    "@global": {
        '.MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: props => props.isNight? '2px solid rgba(255, 255, 255, 0.87)' : '2px solid rgba(0, 0, 0, 0.87)',
        },
        ".MuiInput-underline::before": {
            borderColor: props => props.isNight ? '#fff' : '#000',
        },
        '.MuiInputBase-root': {
            color :props => props.isNight ? '#fff' : '#000',
        },
        '.MuiSvgIcon-root': {
            color :props => props.isNight ? '#fff' : '#000',
        },
    },
    nav_root: {
        position: 'relative',
        width: '100%',
        height: '60px',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        background: props => props.isNight ? '#000' : '#fff',
        boxShadow: props => props.isNight ? '0 5px 10px #fff2' : '0 10px 10px #0002',
        zIndex: 1,
        [Res('400')]: {
            padding : '0 10px'
        }
    },
    leftContainer: {
        position: 'relative',
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        '& h1': {
            marginRight: '20px',
            color: props => props.isNight ? '#fff' : '#000',
            fontFamily: "Russo One, sans-serif",
            letterSpacing: '4px',
            [Res('500')]: {
                fontSize : '16px'
            },
            [Res('375')]: {
                fontSize: '14px',
                marginRight : '10px'
            },
            [Res('330')]: {
                fontSize : '12px'
            }
        },
        '& svg': {
            marginRight: '10px',
            color: props => props.isNight ? '#fff' : '#000',
            [Res('375')]: {
                marginRight:'5px'
            }
        }
    }
}