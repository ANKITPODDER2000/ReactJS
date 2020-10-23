import React , {Component} from "react";
import ColorBox from "./ColorBox";
import { v4 as uuid } from "uuid";

import "./stylesheet/Palette.css";

class Palette extends Component{
    render() {
        let colorbox = this.props.colors.map(color =>
            <ColorBox key={uuid()} background={color.color} name={color.name}/>
        );
        return (
            <div className="Palette">
                {/* Navbar goes here */}
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