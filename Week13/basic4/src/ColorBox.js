import React, { Component } from 'react';
import "./stylesheet/ColorBox.css";

class ColorBox extends Component {
    render() {
        const { background, name } = this.props;
        console.log(background,name)
        return (
            <div className="ColorBox" style={{background:background}}>
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <button className="copy-btn">Copy</button>
                </div>
                <span className="see-more">More</span>
            </div>
        );
    }
}

export default ColorBox;
