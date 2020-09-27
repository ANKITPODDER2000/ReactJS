import React, { Component } from "react";
import HangmanImg from "./HangmanImg";
import words from "./chooseWord";
import "./HangmanGame.css";

class HangmanGame extends Component {
  static defaultProps = {
    keys: "abcdefghijklmnopqrstuvwxyz".split(""),
  };

  makeInitialWord(Word) {
    let word = "";
    for (let i = 0; i < Word.length; i++) {
      word += "*";
    }
    return word;
  }

  constructor(props) {
    super(props);
    let word = words[Math.floor(Math.random() * words.length)];
    this.state = {
      word: word,
      img: 10 - word.length,
      currentWord: this.makeInitialWord(word),
      leftChance: word.length - 1,
      win: false,
      guess : new Set(),
    };
  }
  restart(){
      let word = words[Math.floor(Math.random() * words.length)];
      this.setState({
        word: word,
        img: 10 - word.length,
        currentWord: this.makeInitialWord(word),
        leftChance: word.length - 1,
        win: false,
        guess : new Set(),
      });
  }

  makeNewCurrentWord(cur_st, ch) {
    let currentWord = cur_st.currentWord;
    let newCurrentWord = "";
    for (let i = 0; i < this.state.word.length; i++) {
      if (this.state.word[i] === ch) {
        newCurrentWord += ch;
      } else {
        newCurrentWord += currentWord[i];
      }
    }
    for (let i = 0; i < newCurrentWord.length; i++) {
      if (newCurrentWord[i] === "*") {
        return {
          currentWord: newCurrentWord,
          guess: cur_st.guess.add(ch),
        };
      }
    }
    return {
      currentWord: newCurrentWord,
      win: true,
      guess: cur_st.guess.add(ch)
    };
  }

  click(e, ch) {
    if (this.state.win || this.state.leftChance === -1) return;
    if (!this.state.word.match(ch)) {
      this.setState((currentState) => {
        return {
          leftChance: currentState.leftChance - 1,
          img: currentState.img + 1,
          guess: currentState.guess.add(ch),
        };
      });
      return;
    } else {
      this.setState((currentState) =>
        this.makeNewCurrentWord(currentState, ch)
      );
    }
  }

  render() {
    let arr = [];
    for (let i = 0; i < this.state.currentWord.length; i++) {
      if (this.state.currentWord[i] === "*" && this.state.leftChance === -1) {
        arr.push(<p className="red">{this.state.word[i]}</p>);
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
        <div className="text">{arr}</div>
        <div className="keyboard">
          {this.props.keys.map((k) => (
            <button onClick={(e) => this.click(e.target, k)} disabled={this.state.guess.has(k)}>{k}</button>
          ))}
        </div>
        <button className="restart" onClick={() => this.restart()}>
          {this.state.leftChance === -1
            ? "Play Again ? "
            : this.state.win
            ? "Play Again ?"
            : "Restart ?"}
        </button>
      </div>
    );
  }
}

export default HangmanGame;