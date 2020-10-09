import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import DiceBox from "./DiceBox";
import Button from "./Button";
import "./Game.css";

class Game extends Component{
    constructor(props) {
        super(props);
        this.state = {
          dicedetails: [
            { dice: this.diceValue(), needtorotate: true, id: uuidv4() },
            { dice: this.diceValue(), needtorotate: true, id: uuidv4() },
            { dice: this.diceValue(), needtorotate: true, id: uuidv4() },
            { dice: this.diceValue(), needtorotate: true, id: uuidv4() },
            { dice: this.diceValue(), needtorotate: true, id: uuidv4() },
          ],
          btn: { btnclickleft: 2 , disabled :false},
        };

        this.btnClick = this.btnClick.bind(this);
        this.diceClick = this.diceClick.bind(this);
    }

    diceValue() {
        let arr = ['one', 'two', 'three', 'four', 'five', 'six'];
        let rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }

    diceClick(id) {
        console.log(id);
    }

    btnClick() {
        this.setState({
            dicedetails: this.state.dicedetails.map(dict => {
                if(dict.needtorotate)
                    return {...dict , dice : this.diceValue()}
                return dict;
            }),
            btn: {
                btnclickleft: this.state.btn.btnclickleft - 1,
                disabled : (this.state.btn.btnclickleft-1 === 0)
            }
        })
    }

    render() {
        return (
          <div className="game">
            <div className="header">
                <h1>
                    Yahtzee<span>!</span>
                </h1>
                <DiceBox
                    dicedetails={this.state.dicedetails}
                    diceClick={this.diceClick}
                />
                <Button 
                    details={this.state.btn}
                    btnClick = {this.btnClick}
                />
            </div>
          </div>
        );
    }
}

export default Game;