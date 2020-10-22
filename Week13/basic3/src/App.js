import React, { Component } from 'react';
//Import from react-router-dom
import { Switch, Route, Redirect } from "react-router-dom";
//Import Component
import Home from "./Home";
import Nav from "./Nav";
import Dog from "./Dog";
//Import images
import binny from "./img/binny.jpg";
import kit from "./img/kit.jpg";
import lucky from "./img/lucky.jpg";
import tom from "./img/tom.jpg";
import './App.css';

class App extends Component{
    static defaultProps = {
        dog: [
            {
                name: "Binny",
                img: binny,
                facts: [
                    'Fact1 -> Run fast',
                    'Fact2 -> Never eat meat!',
                    'Fact3 -> Large dag!!'
                ],
                age : 10
            },
            {
                name: "Kit",
                img: kit,
                facts: [
                    'Fact1 -> Run fast',
                    'Fact2 -> Never eat meat!',
                    'Fact3 -> Large dag!!',
                    'Fact4 -> Always hungry!'
                ],
                age : 5
            },
            {
                name: "Lucky",
                img: lucky,
                facts: [
                    'Fact1 -> Run fast',
                    'Fact2 -> Never eat meat!',
                    'Fact3 -> Large dag!!'
                ],
                age : 8
            },
            {
                name: "Tom",
                img: tom,
                facts: [
                    'Fact1 -> Run fast',
                    'Fact2 -> Never eat meat!',
                    'Fact3 -> Large dag!!'
                ],
                age : 7
            }
        ]
    }
    constructor(props) {
        super(props);
        this.getDog = this.getDog.bind(this);
    }
    getDog(dog_name) {
        let i , flag = 0;
        for (i = 0; i < this.props.dog.length; i++){
            if (this.props.dog[i].name === dog_name) {
                flag = 1;
                break;
            }
        }
        if(flag === 0) return <Redirect to="/notfound"/>
        return <Dog dog={this.props.dog[i]}/>
    }
    render() {
        return (
            <div className="App">
                <Nav dog={this.props.dog}/>
                <Switch>
                    <Route exact path="/" render={() => <Home dog={this.props.dog}/>} />
                    <Route exact path="/dogs/:dogname" render={(details) => this.getDog(details.match.params.dogname)} />
                    <Route render = {() => <h1>404 !!! , dog not found.</h1>} />
                </Switch>
            </div>
        )
    }
}

export default App;
