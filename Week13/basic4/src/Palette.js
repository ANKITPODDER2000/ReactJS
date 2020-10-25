import React , {Component} from "react";
import ColorBox from "./ColorBox";
import { v4 as uuid } from "uuid";
import { withStyles } from "@material-ui/styles";
import Nav from "./Nav";
import Footer from "./Footer";
import style from "./stylesheet/Palette";

class Palette extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 500,
            format : 'hex'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleFormat = this.handleFormat.bind(this);
    }
    handleChange(level) {
        this.setState({
            value : level
        })
    }
    handleFormat(evt) {
        this.setState({
            format : evt.target.value
        })
    }
    render() {
        let { classes } = this.props;
        let colorbox = this.props.colors[this.state.value].map(color =>
            <ColorBox
                key={uuid()}
                background={color[this.state.format]}
                name={color.name}
                paletteId={this.props.id}
                colorId = {color.id}
            />
        );
        return (
            <div className={classes.Palette}>
                {/* Navbar goes here */}
                <Nav
                    value={this.state.value}
                    handleChange={this.handleChange}
                    handleFormat={this.handleFormat}
                />
                <div className={classes.PaletteColors}>
                    {/* ColorBox goes here */}
                    {colorbox}
                </div>
                {/* Footer goes here */}
                <Footer
                    paletteName={this.props.paletteName}
                    emoji = {this.props.emoji}
                />
            </div>
        )
    }
}

export default withStyles(style)(Palette);