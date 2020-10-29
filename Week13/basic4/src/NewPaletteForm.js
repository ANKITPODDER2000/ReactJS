import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withRouter } from "react-router-dom";
import NewPaletteColorList from "./NewPaletteColorList";
import  arrayMove from "array-move";
import NewPaletteFormNav from "./NewPaletteFormNav";
import NewPaletteFormSlideBar from "./NewPaletteFormSlideBar";
import ntc from "./ntc";

const drawerWidth = 340;
function RGBAToHexA(r,g,b,a) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    a = Math.round(a * 255).toString(16);

    if (r.length === 1)
    r = "0" + r;
    if (g.length === 1)
    g = "0" + g;
    if (b.length === 1)
    b = "0" + b;
    if (a.length === 1)
    a = "0" + a;

    return "#" + r + g + b + a;
}
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

class NewPaletteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            color: "#008080",
            colors: [ 
                { name: 'Red', color: "#f00" },
                { name : "Green" , color : "#0f0"},
                { name : "Blue", color: "#00f" },
                { name: "Black", color: "#000" },
                { name: 'Yellow', color: '#FEFE00' },
                {name : 'Light Blue' , color : '#12D0F0'}
            ],
            colorName: '',
            paletteName : ''
        }
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleAddColor = this.handleAddColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClearPalette = this.handleClearPalette.bind(this);
        this.handleRandomColor = this.handleRandomColor.bind(this);
        this.savePalette = this.savePalette.bind(this);
        this.deleteColor = this.deleteColor.bind(this);
    }
    savePalette() {
        let paletteName = this.state.paletteName;
        let Palette = {
            paletteName: paletteName,
            id: paletteName.toLowerCase().replaceAll(" ", "-"),
            emoji: '😎',
            colors : this.state.colors
        }
        this.props.savePalette(Palette);
        this.props.history.push("/");
    }
    handleAddColor() {
        let obj = {
            name: this.state.colorName,
            color : this.state.color
        }
        this.setState({
            colors : [...this.state.colors , obj]
        })
    }
    handleRandomColor() {
        let randomColor = RGBAToHexA(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), 1);
        this.setState({
            color : randomColor,
            colorName:ntc.name(randomColor.slice(0,7))[1],
        })
    }
    handleDrawerOpen(){
        this.setState({ open: true });
    };

    handleDrawerClose(){
        this.setState({ open: false });
    };
    handleColorChange(color) {
        this.setState({
        color : color.hex
        })
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name] : evt.target.value,
        })
    }
    handleClearPalette() {
        this.setState({
        colors : []
        })
    }
    deleteColor(colorName) {
        this.setState({
            colors : this.state.colors.filter(color => color.name !== colorName),
        })
    }
    componentDidMount() {
        ValidatorForm.addValidationRule("isColorNameUnique", value =>
            this.state.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );

        ValidatorForm.addValidationRule("isColorUnique", value =>
            this.state.colors.every(({ color }) => color !== this.state.color)
        );
        
        ValidatorForm.addValidationRule("isPaletteFull", value =>
            this.state.colors.length !== 20
        );
                
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
            this.props.palette.every(({ paletteName }) => paletteName.toLowerCase() !== this.state.paletteName.toLowerCase())
        );
    }
    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({colors}) => ({
            colors: arrayMove(colors, oldIndex, newIndex),
        }));
    };
    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.root}>
                
                <NewPaletteFormNav
                    open={this.state.open}
                    classes={classes}
                    handleDrawerOpen={this.handleDrawerOpen}
                    savePalette={this.savePalette}
                    paletteName={this.state.paletteName}
                    handleChange = {this.handleChange}
                />

                <NewPaletteFormSlideBar
                    classes={classes} 
                    open={this.state.open}
                    handleDrawerClose={this.handleDrawerClose}
                    handleClearPalette={this.handleClearPalette}
                    handleRandomColor={this.handleRandomColor}
                    color={this.state.color}
                    handleColorChange={this.handleColorChange}
                    handleAddColor={this.handleAddColor}
                    handleChange={this.handleChange}
                    colorName={this.state.colorName}
                    handleChange={this.handleChange}
                    noOfColors={this.state.colors.length}
                />

                <main
                className={classNames(classes.content, {
                    [classes.contentShift]: open
                })}
                >
                    <div className={classes.drawerHeader} />
                    <div style={{position:"relative" , width:"100%" , height:"100%"}}>
                        <NewPaletteColorList
                            colors={this.state.colors}
                            deleteColor={this.deleteColor}
                            distance={1}
                            axis='xy'
                            onSortEnd={this.onSortEnd}
                        />
                    </div>
                </main>
            </div>
        );
  }
}
export default withStyles(styles, { withTheme: true })(withRouter(NewPaletteForm));