import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withRouter } from "react-router-dom";
import NewPaletteColorList from "./NewPaletteColorList";
import { arrayMove } from "react-sortable-hoc";

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
    })
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
        let randomColor = RGBAToHexA(Math.floor(Math.random() * 255) , Math.floor(Math.random() * 255),Math.floor(Math.random() * 255), 1);
        this.setState({
        color : randomColor
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
                <CssBaseline />
                <AppBar
                color="default"
                position='fixed'
                className={classNames(classes.appBar, {
                    [classes.appBarShift]: open
                })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                        color='inherit'
                        aria-label='Open drawer'
                        onClick={this.handleDrawerOpen}
                        className={classNames(classes.menuButton, open && classes.hide)}
                        >
                        <MenuIcon />
                        </IconButton>
                        <Typography variant='h6' color='inherit' noWrap>
                            Persistent drawer
                        </Typography>
                        <ValidatorForm
                            style={{ display: 'flex' }}
                            onSubmit={this.savePalette}
                            ref="form"
                        >
                            <TextValidator
                                value={this.state.paletteName}
                                style={{ margin: "0 15px 0 20px" }}
                                placeholder="Palette Name"
                                name="paletteName"
                                validators={['required', 'isPaletteNameUnique']}
                                errorMessages={[
                                    'This field is required!',
                                    'Palette name already exist!'
                                ]}
                                onChange={this.handleChange}
                            />
                            <Button
                                variant="contained"
                                color="secondary"
                                type="submit"
                            >
                                SAVE PALETTE
                            </Button>
                        </ValidatorForm>
                        
                    </Toolbar>
                </AppBar>
                <Drawer
                className={classes.drawer}
                variant='persistent'
                anchor='left'
                open={open}
                classes={{
                    paper: classes.drawerPaper
                }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                        <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Typography variant="h4">Create Your Palette</Typography>
                    <Divider />
                    <div>
                        <Button
                        variant="contained"
                        color="secondary"
                        onClick = {this.handleClearPalette}
                        >
                        Clear Palette
                        </Button>
                        <Button
                        variant="contained"
                        color="primary"
                        onClick = {this.handleRandomColor}
                        >
                        Random Color
                        </Button>
                    </div>
                    <ChromePicker
                        color = {this.state.color}
                        onChangeComplete={newColor => this.handleColorChange(newColor)}
                    />
                    <ValidatorForm
                        onSubmit={this.handleAddColor}
                        ref="form"
                    >
                        <TextValidator
                            onChange={this.handleChange}
                            name="colorName"
                            value={this.state.colorName}
                            validators={['required' , 'isColorNameUnique','isColorUnique']}
                            errorMessages={[
                            'This field is required!',
                            'Color name must be unique!',
                            'Color already used!'
                            ]}
                        />
                        <br/>
                        <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ background: this.state.color }}
                        >
                        Add Color
                        </Button>
                    </ValidatorForm>
                </Drawer>
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