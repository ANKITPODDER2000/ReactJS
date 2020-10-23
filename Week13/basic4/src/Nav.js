import React, { Component } from 'react';
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./stylesheet/Nav.css";

class Nav extends Component {
    render() {
        return (
            <nav>
                <div className="logo">
                    <a href="">ReactColorPicker</a>
                </div>
                <div className="level">
                    <span>Level : {this.props.value}</span>
                </div>
                <div className="slider">
                    <Slider
                        defaultValue={this.props.value}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange = {this.props.handleChange}
                    />
                </div>
            </nav>
        );
    }
}

export default Nav;
