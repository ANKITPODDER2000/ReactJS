import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import './App.css';

class App extends Component{
    render() {
        return (
            <div className="app">
                <div className="app_body">
                    <Sidebar />
                </div>
            </div>
        )
    }
}

export default App;
