import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Soda from "./Soda";
import Chips from "./Chips";
import Tandoor from "./Tandoor";

class App extends Component{
    render() {
        return (
            <div className="App">
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/soda" render={() => <Soda />} />
                <Route exact path="/chips" render={() => <Chips />} />
                <Route exact path="/tandoor" render={() => <Tandoor />} />
            </div>
        )
    }
}

export default App;
