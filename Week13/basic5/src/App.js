import React, { Component } from 'react';
import { Router , Route, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import './App.css';

class App extends Component{
    render() {
        return (
            <div className="app">
                <div className="app_body">
                    <Sidebar/>
                    <Switch>
                        <Route
                            path="/chat/:userId"
                            render={() => <Chat />}
                        />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App;
