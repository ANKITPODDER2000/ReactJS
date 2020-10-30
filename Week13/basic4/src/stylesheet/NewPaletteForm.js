import Res from "./Const";
const drawerWidth = window.innerWidth <= 360 ? window.innerWidth : 340;
const styles = theme => ({
    root: {
        display: "flex",
        height: '100vh',
        overflow : 'hidden'
    },
    appBar: {
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: '64px',
    },
    appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
    })
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
        [Res.media('510')]: {
            margin : '0px',
        }
    },
    hide: {
    display: "none"
    },
    drawer: {
    width: drawerWidth,
    flexShrink: 0
    },
    drawerPaper: {
    width: drawerWidth
    },
    drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
    },
    content: {
    flexGrow: 1,
    height : "calc(100vh - 64px)",
    padding: 0,
    transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
    },
    contentShift: {
    transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
    },
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '50px',
        height: '64px',
        [Res.media('470')]: {
            marginRight : '10px'
        }
    },
    form: {
        display: 'flex',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    navContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '30px',
        "& h4": {
          marginBottom:'25px'  
        },
        [Res.media('400')]: {
            paddingTop: 0,
            "& h4": {
            marginBottom:10  
            },
        }
    },
    SlideBtns: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: '30px',
        [Res.media('400')]: {
            marginBottom: 15,
            "& .btn": {
                fontSize:12
            }
        },
    },
    picker: {
        width: '250px !important',
        marginBottom: '25px',
        [Res.media('360')]: {
            width: '210px !important',
        }
    },
    goBack: {
        marginRight: "15px",
        [Res.media('460')]: {
            fontSize: 10,
            marginRight:8
        },
        [Res.media('340')]: {
            fontSize: 8,
            marginRight:4
        }
    },
    save: {
        [Res.media('460')]: {
            fontSize: 10,
        },
        [Res.media('340')]: {
            fontSize : 8
        }
    },
    heading: {
        [Res.media('460')]: {
            fontSize : '14px'
        },
        [Res.media('351')]: {
            fontSize:13
        }
    }
});

export default styles;