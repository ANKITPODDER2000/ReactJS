import React , {Component} from 'react';
import Timer from "./Timer";
import Quote from "./Quote";
import './App.css';

class App extends Component{
    render() {
        return (
            <div className="App">
                <Timer />
                <Quote />
            </div>
        );
    }
}

export default App;
