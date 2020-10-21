import React, { Component } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import Joke from "./Joke";
import "./Jokegen.css";

const API_URL = 'https://icanhazdadjoke.com';
class Jokegen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            joke: JSON.parse(window.localStorage.getItem('joke') || '[]'),
            isLoaded : false
        }
        this.handleNewJoke = this.handleNewJoke.bind(this);
        this.handleVote = this.handleVote.bind(this);
    }
    
    async componentDidMount() { 
        if (this.state.joke.length === 0) {
            let joke = [];
            for (let i = 0; i < 10; i++){
                let res = await axios.get(API_URL, {
                    headers: {
                        Accept : "application/json"
                    }
                })
                joke.push({ joke: res.data.joke, vote: 0 , key : uuidv4()});
            }
            this.setState({ joke: joke , isLoaded : true} , () => window.localStorage.setItem("joke" , JSON.stringify(joke)));
        }
        else {
            this.setState({
                isLoaded : true
            })
        }
    }

    async handleNewJoke() {
        this.setState({
            isLoaded : false
        })
        let res = await axios.get(API_URL, {
            headers: {
                Accept : "application/json"
            }
        })
        this.setState({
            joke: [...this.state.joke, {
                joke: res.data.joke,
                vote: 0,
                key: uuidv4()
            }],
            isLoaded : true
        } , () => window.localStorage.setItem("joke" , JSON.stringify(this.state.joke)));
        
    }

    handleVote(k, val) {
        let joke = this.state.joke;
        for (let i = 0; i < joke.length; i++){
            if (joke[i].key === k)
                joke[i].vote += val;
        }
        this.setState({
            joke: joke,
        } , () => window.localStorage.setItem("joke" , JSON.stringify(joke)))
    }
    render() {
        let block = null;
        if (this.state.isLoaded)
        {
            block =
                <div className="main-container">
                    <div className="left-container">
                        <h1>Dad <span>Jokes</span></h1>
                        <img
                            src="http://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
                            alt="emoji"
                        />
                        <button onClick={this.handleNewJoke}>NEW Jokes</button>
                    </div>
                    <div className="right-container">
                        {this.state.joke.map((joke, ind) => <Joke key={joke.key} ind={ind} joke={joke} vote={this.handleVote} />)}
                    </div>
                </div>
        }
        else
        {
            block = 
                <div className="loader">
                    <div className="loader-inner">
                        <div className="loader-line-wrap">
                            <div className="loader-line"></div>
                        </div>
                        <div className="loader-line-wrap">
                            <div className="loader-line"></div>
                        </div>
                        <div className="loader-line-wrap">
                            <div className="loader-line"></div>
                        </div>
                        <div className="loader-line-wrap">
                            <div className="loader-line"></div>
                        </div>
                        <div className="loader-line-wrap">
                            <div className="loader-line"></div>
                        </div>
                    </div>
                </div>
        }
        return block;
    }
}

export default Jokegen;