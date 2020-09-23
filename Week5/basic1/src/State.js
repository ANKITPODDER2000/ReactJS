import React, { Component } from "react";


class State extends Component{
    constructor(props) {
        super(props);
        this.state = {
            'score': 10,
            'gameOver': false,
            "time": 0,
            'click' :false
        }
        //this.makeCount();
        this.ClickBtn = this.ClickBtn.bind(this);
    }
    /*
    makeCount() {
        setInterval(() => {
            this.setState({'time' : this.state.time + 1})
        } , 1000)
    }
    */
    ClickBtn(a){
        this.setState({
            'click' : true
        })
    }
    render() {
        return (
            <div>
                <h2>
                    Your Score is : {this.state.score}
                </h2>
                <p>
                    GameOver : {this.state.gameOver ? "Game is Over" : "Game isn't Over"}
                </p>
                <p>
                    {this.state.click ? "Clicked ":"Not Clicked"}
                </p>
                <button onClick={this.ClickBtn}>
                    Click Me
                </button>
            </div>
        )
    }
}

export default State;