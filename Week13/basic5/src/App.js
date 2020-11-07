import React, { Component } from 'react';
import { Route, Switch , Redirect } from "react-router-dom";
import { UserContext } from "./Context/UserContext"
import AppBody from "./AppBody";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import './App.css';

class App extends Component{
    static contextType = UserContext;
    render() {
        const { userLogin , id } = this.context;
        return (
            <Switch>
                {/* 
                    This route for the home page /
                    this page will redirect to url/userId
                */}
                <Route 
                    exact 
                    path="/" 
                    render={() =>
                        !userLogin
                            ?
                            <Redirect to="/login" />
                            :
                            <Redirect to={ `/${id}` } />
                    }
                />
                {/*This route for the Login page!*/}
                <Route 
                    exact 
                    path="/login" 
                    render={ () => <Login /> }
                />
                {/*
                    This Route for url/userId
                */}
                <Route
                    exact
                    path="/:userId"
                    render={() =>
                        !userLogin
                            ?
                                <Redirect to="/login" />
                            :
                            <AppBody>
                                <Sidebar />
                            </AppBody>
                    }
                />
                {/*This route for the chat page!*/}
                <Route
                    exact
                    path="/chat/:userId"
                    render={() =>
                        !userLogin ?
                                <Redirect to="/login" />
                            :
                                <AppBody>
                                    <Sidebar/>
                                    <Chat />
                                </AppBody>
                    }
                />
            </Switch>
        )
    }
}

export default App;
