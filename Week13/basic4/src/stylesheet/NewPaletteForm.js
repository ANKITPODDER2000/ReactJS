const drawerWidth = 340;
const styles = theme => ({
    root: {
    display: "flex"
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
    marginRight: 20
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
    padding: theme.spacing.unit * 3,
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
        height: '64px'
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
        paddingTop: '30px'
    },
    SlideBtns: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: '30px',
    },
    picker: {
        width: '250px !important',
        marginBottom : '25px'
    }
});

export default styles;