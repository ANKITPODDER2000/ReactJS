export default {
    sidebar_search : {
        position: 'relative',
        width: '100%',
        height: '50px',
        background:  '#131C21',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sidebar_search_box : {
        position: 'relative',
        width: '90%',
        height: '60%',
        background: '#323739',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50px'
    },
    input : {
        position: 'relative',
        width: 'calc(100% - 34px)',
        padding: '0 20px',
        height: '100%',
        border: 'none',
        background: 'none',
        outline: 'none',
        color : '#fff',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif"
    },
    seach_icon : {
        color: '#fff8',
        marginLeft: '10px',
        cursor: 'pointer',
        transition: 'color 0.5s',
        "&:hover": {
            color: '#fff'
        }
    }
}