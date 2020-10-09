import React, { Component } from "react";
import "./DiceBox.css";

class DiceBox extends Component{
    render() {
        let dicedetails = this.props.dicedetails;
        let diceArr = [];
        for (let i = 0; i < dicedetails.length; i++){
            if (dicedetails[i].needtorotate) {
                diceArr.push(
                    <i
                        key={dicedetails[i].id}
                        className={"fas fa-dice-" + dicedetails[i].dice + " rotate"}
                        onClick={() => this.props.diceClick(dicedetails[i].id)}
                    ></i>
                );
            }
            else {
                diceArr.push(
                    <i
                        key={dicedetails[i].id}
                        className={"fas fa-dice-" + dicedetails[i].dice}
                        onClick={() => this.props.diceClick(dicedetails[i].id)}
                    ></i>
                )
            }
        }
        return (
          <div className="dicebox">
            {diceArr}
          </div>
        );
    }
}

export default DiceBox;