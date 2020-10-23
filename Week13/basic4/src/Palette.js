import React , {Component} from "react";
import ColorBox from "./ColorBox";
import { v4 as uuid } from "uuid";
import Nav from "./Nav";
import "./stylesheet/Palette.css";

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
        let colorbox = this.props.colors[this.state.value].map(color =>
            <ColorBox key={uuid()} background={color[this.state.format]} name={color.name}/>
        );
        return (
            <div className="Palette">
                {/* Navbar goes here */}
                <Nav
                    value={this.state.value}
                    handleChange={this.handleChange}
                    handleFormat={this.handleFormat}
                />
                <div className="Palette-colors">
                    {/* ColorBox goes here */}
                    {colorbox}
                </div>
                {/* Footer goes here */}
                <footer>
                    <p>{this.props.paletteName}</p>
                    <p>{this.props.emoji}</p>
                </footer>
            </div>
        )
    }
}

export default Palette;