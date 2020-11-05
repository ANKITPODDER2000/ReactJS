import React, { Component } from 'react';
import "./Sidebar.css";

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar_header">
                    <div className="sidebar_header_right"></div>
                </div>
                <div className="sidebar_search"></div>
                <div className="sidebar_chat"></div>
            </div>
        );
    }
}

export default Sidebar;
