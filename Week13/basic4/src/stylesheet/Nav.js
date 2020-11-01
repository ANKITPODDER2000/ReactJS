import Res from "./Const";
export default {
    nav : {
        position: 'relative',
        width: '100%',
        height: '6vh',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        background : '#fff',
        "& .logo": {
            padding: '0 13px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyXontent: 'center',
            background: '#eceff1',
            marginRight: '15px',
            [Res.media('640')]: {
                display : props => props.sizeBig ? null : 'none',
            },
            "& a": {
                textDecoration: 'none',
                color: '#000',
                letterSpacing: '1px',
            }
        },
        "& .level": {
            position: 'relative',
            marginRight: '13px',
        }
    },
    slider: {
        position: 'relative',
        display: 'inline-block',
        width: '340px',
        margin: '0 10px',
        [Res.media('790')]: {
            width : '250px'
        },
        [Res.media('450')]: {
            width: '120px',
            marginLeft : '0'
        },
        "& .rc-slider-track": {
            backgroundColor: 'transparent',
        },
        "& .rc-slider-rail": {
            height: '8px',
        },
        "& .rc-slider-handle, & .rc-slider-handle:hover, & .rc-slider-handle:focus,& .rc-slider-handle:active ": {
            backgroundColor: 'green',
            outline: 'none',
            border: '2px solid green',
            boxShadow: 'none',
            width: '13px',
            height: '13px',
            marginTop: '-3px',
        }
    },
    select: {
        position: 'absolute',
        right: '50px',
        [Res.media('710')]: {
            right : '10px'
        }
    }

}