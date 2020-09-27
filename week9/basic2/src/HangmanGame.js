import React, { Component } from "react";
import HangmanImg from "./HangmanImg";
import choose_word from "./chooseWord";
import "./HangmanGame.css";

class HangmanGame extends Component{
    static defaultProps = {
        word: choose_word,
        keys : "abcdefghijklmnopqrstuvwxyz".split("")
    }
    makeInitialWord() {
        let word = "";
        for (let i = 0; i < this.props.word.length; i++){
            word += "*";
        }
        return word;
    }
    constructor(props) {
        super(props);
        this.state = {
            img: 10 - this.props.word.length,
            currentWord: this.makeInitialWord(),
            leftChance: this.props.word.length - 1,
            win : false
        }
    }

    makeNewCurrentWord(cur_st , ch) {
        let currentWord = cur_st.currentWord;
        let newCurrentWord = "";
        for (let i = 0; i < this.props.word.length; i++){
            if (this.props.word[i] === ch) {
                newCurrentWord += ch;
            } else {
                newCurrentWord += currentWord[i];
            }
        }
        for (let i = 0; i < newCurrentWord.length; i++){
            if (newCurrentWord[i] === '*') {
                return { currentWord: newCurrentWord };
            }
        }
        return { currentWord: newCurrentWord , win : true};
        
    }
    
    genID() {
        return Math.floor(Math.random() * 10000);
    }

    click(e , ch) {
        if (this.state.win || this.state.leftChance === -1)
            return;
        e.classList.add("deactive");
        e.disabled = true;
        if (!this.props.word.match(ch)) {
            this.setState(currentState => {
                return {
                    leftChance: currentState.leftChance - 1,
                    img : currentState.img + 1
                }
            })
            return;
        } else {
            this.setState(currentState => this.makeNewCurrentWord(currentState, ch));
        }
    }

    render() {
        let arr = [];
        for (let i = 0; i < this.state.currentWord.length; i++){
            
            if (this.state.currentWord[i] === "*" && this.state.leftChance===-1) {
                arr.push(<p className="red">{this.props.word[i]}</p>);
            } else {
                arr.push(<p>{this.state.currentWord[i]}</p>);
            }
        }
        return (
          <div className="hangmangame">
            <HangmanImg img_num={this.state.img} />
            <p className="msg">
              {this.state.leftChance === -1
                ? "Game Over!"
                : this.state.win
                ? "Woww , You win!"
                : `Guess left : ${this.state.leftChance}`}
            </p>
            <div className="text">
              {arr}
            </div>
            <div className="keyboard">
              {this.props.keys.map((k) => (
                <button onClick={(e) => this.click(e.target , k)}>{k}</button>
              ))}
            </div>
            <button className="restart">
                {this.state.leftChance === -1 ? "Play Again ? " : this.state.win ? "Play Again ?" : "Restart ?"}
            </button>
          </div>
        );
    }
}

export default HangmanGame;