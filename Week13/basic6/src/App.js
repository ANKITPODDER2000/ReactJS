import React, { Component } from "react";
//Import Nav Component
import Nav from "./Nav";
//Import Board Component
import Board from "./Board";
import { withStyles } from "@material-ui/styles";



const style = {
    "@global": {
        "*": {
            padding: 0,
            margin: 0,
            boxSizing: 'border-box'
        }
    }
}

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isNight: true,                  // Determine theme of the game
            playerSymbol: 'X',              //Player symbol -> X / O
            board: this.makeInitialBoard(), // this is the board for the game!
            isStartPlay: false,              // it is used to determine whether play start or not ?
            playername: 'PLAYER 1',         //Player name , default player1 , but initialize with -> ''
            playerStart: true,              // To determine whether player Starts the Game or AI
            gameEnd : false,
            result : ''
        }
        this.handleChange            = this.handleChange.bind(this);
        this.handleSelectChange      = this.handleSelectChange.bind(this);
        this.handleInputChange       = this.handleInputChange.bind(this);
        this.handleChangeplayerStart = this.handleChangeplayerStart.bind(this);
        this.startPlay = this.startPlay.bind(this);
        this.tdClick = this.tdClick.bind(this);
        this.gameStart = this.gameStart.bind(this);
        this.winner = this.winner.bind(this);
        this.isTie = this.isTie.bind(this);
        this.makeAImove = this.makeAImove.bind(this);
        this.restart = this.restart.bind(this);
        this.quit = this.quit.bind(this);
    }
    quit() {
        this.setState({
            gameEnd : true,
            result : 'AI PLAYER'
        })
    }
    restart() {
        this.setState({                  // Determine theme of the game
            playerSymbol: 'X',              //Player symbol -> X / O
            board: this.makeInitialBoard(), // this is the board for the game!
            isStartPlay: false,             // it is used to determine whether play start or not ?
            playername: '',                 //Player name , default player1 , but initialize with -> ''
            playerStart: true,              // To determine whether player Starts the Game or AI
            gameEnd : false,
            result : ''
        })
    }
    makeAImove() {
        //console.log("COME2");
        //console.log(this.state.playerStart, this.state.result, this.state.gameEnd);
        if (this.state.playerStart || this.state.result !== '' || this.state.gameEnd) return;
        //console.log("COME3");
        /**
         * randomize algo for tic tac toe
        let x, y;
        do {
            x = Math.floor(Math.random() * 3);
            y = Math.floor(Math.random() * 3);
        } while (this.state.board[x][y] !== '');
         */


        //console.log(x, y);
        let newBoard = this.state.board;
        let sym;
        if (this.state.playerSymbol === 'X') sym = 'O';
        else sym = 'X';
        newBoard[x][y] = sym;
        this.setState({
            board: newBoard,
            playerStart: false
        }, () => {
                let ret = this.winner(sym);
                if (ret) {
                    this.setState({
                        gameEnd: true,
                        result : 'AI player'
                    })
                } else {
                    if (this.isTie()) {
                        this.setState({
                            gameEnd: true,
                            result : 'Tie'
                        })
                    } else {
                        this.setState({
                            playerStart : true
                        })
                    }
                }
        })
    }
    isTie() {
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if(this.state.board[i][j] === '') return false;
            }
        }
        return true;
    }
    gameStart() {
        //console.log("GAME START!")
        if (this.state.playerStart === false) {
            this.makeAImove();
        }
    }
    winner(sym) {
        for (let i = 0; i < 3; i++){
            if ((this.state.board[i][0] === sym) && (this.state.board[i][1] === sym) && (this.state.board[i][2] === sym)) return true;
            if ((this.state.board[0][i] === sym) && (this.state.board[1][i] === sym) && (this.state.board[2][i] === sym)) return true;
        }
        if ((this.state.board[0][0] === sym) && (this.state.board[1][1] === sym) && (this.state.board[2][2] === sym)) return true;
        if ((this.state.board[0][2] === sym) && (this.state.board[1][1] === sym) && (this.state.board[2][0] === sym)) return true;
        return false;
    }
    tdClick(pos) {
        if (!this.state.playerStart || this.state.result!=='' || this.state.gameEnd) return;
        let x = Number(pos[0]);
        let y = Number(pos[2]);
        if (this.state.board[x][y] !== '') return;
        let newBoard = this.state.board;
        newBoard[x][y] = this.state.playerSymbol;
        this.setState({
            board: newBoard,
            playerStart : false
        }, () => {
                let ret = this.winner(this.state.playerSymbol);
                if (ret) {
                    this.setState({
                        result: this.state.playername,
                        gameEnd : true
                    })
                } else {
                    if (this.isTie()) {
                        this.setState({
                            result : 'tie'
                        })
                    } else {
                        this.makeAImove();
                    }
                }
        })
        //console.log("COME1");
        
    }
    makeInitialBoard() {
        let board = [];
        for (let i = 0; i < 3; i++){
            let row = [];
            for (let j = 0; j < 3; j++){
                row.push('');
            }
            board.push(row);
        }
        return board;
    }
    handleChange() {
        this.setState({
            isNight : !this.state.isNight
        })
    }
    handleChangeplayerStart(e) {
        this.setState({
            playerStart : !this.state.playerStart
        })
    }
    handleSelectChange(e) {
        this.setState({
            playerSymbol : e.target.value
        })
    }
    handleInputChange(e) {
        this.setState({
            playername : e.target.value
        })
    }
    startPlay() {
        if (this.state.playername === '') {
            this.setState({
                isStartPlay: true,
                playername : 'Player 1'
            } , this.gameStart)
        } else {
            this.setState({
                isStartPlay : true
            } , this.gameStart)
        }
        
    }
    render() {
        //const { classes } = this.props;
        return (
            <div>
                <Nav
                    handleSelectChange={this.handleSelectChange}
                    handleChange={this.handleChange}
                    playerSymbol={this.state.playerSymbol}
                    isNight={this.state.isNight}
                />

                <Board
                    isNight={this.state.isNight}
                    playername={this.state.playername}
                    handleChangeplayerStart={this.handleChangeplayerStart}
                    handleInputChange={this.handleInputChange}
                    playerStart={this.state.playerStart}
                    isStartPlay={this.state.isStartPlay}
                    startPlay={this.startPlay}
                    board={this.state.board}
                    tdClick={this.tdClick}
                    gameEnd={this.state.gameEnd}
                    result={this.state.result}
                    restart={this.restart}
                    quit = {this.quit}
                />
            </div>
        )
    }
}

export default withStyles(style)(App);
