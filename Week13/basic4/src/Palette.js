import React , {Component} from "react";
import ColorBox from "./ColorBox";
import { v4 as uuid } from "uuid";
import Slider from "rc-slider";
import "rc-slider/assets/index.css"

import "./stylesheet/Palette.css";

class Palette extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value : 500
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(level) {
        this.setState({
            value : level
        })
    }
    render() {
        let colorbox = this.props.colors[this.state.value].map(color =>
            <ColorBox key={uuid()} background={color.hex} name={color.name}/>
        );
        return (
            <div className="Palette">
                {/* Navbar goes here */}
                <Slider
                    defaultValue={this.state.value}
                    min={100}
                    max={900}
                    step={100}
                    onAfterChange = {this.handleChange}
                />
                <div className="Palette-colors">
                    {/* ColorBox goes here */}
                    {colorbox}
                </div>
                {/* Footer goes here */}
            </div>
        )
    }
}

export default Palette;