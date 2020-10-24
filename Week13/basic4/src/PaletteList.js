import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PaletteList extends Component {
    render() {
        return (
            <div>
                {this.props.color.map(color => 
                    <p>
                        <Link to={`/palette/${color.id}`}>{color.paletteName}</Link>
                    </p>
                )}
            </div>
        );
    }
}

export default PaletteList;
