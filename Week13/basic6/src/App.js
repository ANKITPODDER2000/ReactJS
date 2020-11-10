import React, { Component } from "react";
//Import Nav Component
import Nav from "./Nav";
//Import Board Component
import Board from "./Board";
import { withStyles } from "@material-ui/styles";

function max(a, b) {
    if (a > b) return a;
    return b;
}
function min(a, b) {
    if (a < b) return a;
    return b;
}

function winner(board , sym) {
    for (let i = 0; i < 3; i++){
        if ((board[i][0] === sym) && (board[i][1] === sym) && (board[i][2] === sym)) return true;
        if ((board[0][i] === sym) && (board[1][i] === sym) && (board[2][i] === sym)) return true;
    }
    if ((board[0][0] === sym) && (board[1][1] === sym) && (board[2][2] === sym)) return true;
    if ((board[0][2] === sym) && (board[1][1] === sym) && (board[2][0] === sym)) return true;
    return false;
}
function isTie(board) {
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if(board[i][j] === '') return false;
        }
    }
    return true;
}

/**
 * score = maxmin(
        board,
        { ai : sym, player: this.state.playerSymbol },
        { ai : 1 , player : -1 , tie : 0},
        'max'
    )
 */
function maxmin(board, symbol, reward, str) {
    if( isTie(board)) return 0;
    if (str === 'max') {
        let bestScore = +Infinity;
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if (board[i][j] === '') {
                    board[i][j] = symbol.player;
                    if (winner(board, symbol.player)) {
                        board[i][j] = ''
                        return -1;
                    }
                    let score = maxmin(board, symbol, reward, 'min');
                    bestScore = min(score, bestScore);
                    board[i][j] = ''
                }
            }
        }
        return bestScore;
    } else {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if (board[i][j] === '') {
                    board[i][j] = symbol.ai;
                    if (winner(board, symbol.ai)) {
                        board[i][j] = ''
                        return 1;
                    }
                    let score = maxmin(board, symbol, reward, 'min');
                    bestScore = max(score, bestScore);
                    board[i][j] = ''
                }
            }
        }
        return bestScore;
    }
}


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
            playername: '',         //Player name , default player1 , but initialize with -> ''
            playerStart: false,              // To determine whether player Starts the Game or AI
            gameEnd : false,
            result: '',
            currentPlayer : ''
        }
        this.handleChange            = this.handleChange.bind(this);
        this.handleSelectChange      = this.handleSelectChange.bind(this);
        this.handleInputChange       = this.handleInputChange.bind(this);
        this.handleChangeplayerStart = this.handleChangeplayerStart.bind(this);
        this.startPlay               = this.startPlay.bind(this);
        this.tdClick                 = this.tdClick.bind(this);
        this.gameStart               = this.gameStart.bind(this);
        this.makeAImove              = this.makeAImove.bind(this);
        this.restart                 = this.restart.bind(this);
        this.quit                    = this.quit.bind(this);
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
            playerStart: false,              // To determine whether player Starts the Game or AI
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
        let board = this.state.board;
        let sym , score , pos , bestScore = -Infinity;
        if (this.state.playerSymbol === 'X') sym = 'O';
        else sym = 'X';
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if (board[i][j] === '') {
                    board[i][j] = sym;
                    if (winner(board, sym))
                    {
                        score = 1;
                    }
                    else {
                        score = maxmin(
                            board,
                            { ai: sym, player: this.state.playerSymbol },
                            { ai: 1, player: -1, tie: 0 },
                            'max'
                        )
                    }
                    if (score > bestScore) {
                        bestScore = score;
                        pos = {x : i , y : j}
                    }
                    board[i][j] = '';
                }
            }
        }
        //console.log(pos);
        //console.log(board)
        //console.log(x, y);
        let newBoard = this.state.board;
        newBoard[pos.x][pos.y] = sym;
        this.setState({
            board: newBoard,
            currentPlayer : this.state.playername,
            playerStart: false
        }, () => {
                let ret = winner(this.state.board , sym);
                if (ret) {
                    this.setState({
                        gameEnd: true,
                        result : 'AI player'
                    })
                } else {
                    if (isTie(this.state.board)) {
                        this.setState({
                            gameEnd: true,
                            result : 'tie'
                        })
                    } else {
                        this.setState({
                            playerStart : true
                        })
                    }
                }
        })
    }
    
    gameStart() {
        //console.log("GAME START!")
        if (this.state.playerStart === false) {
            setTimeout(()  =>  this.makeAImove() , Math.round(Math.random() * 1000))
            
        }
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
            currentPlayer : 'AI Player',
            playerStart : false
        }, () => {
                let ret = winner(this.state.board , this.state.playerSymbol);
                if (ret) {
                    this.setState({
                        result: this.state.playername,
                        gameEnd : true
                    })
                } else {
                    if (isTie(this.state.board)) {
                        this.setState({
                            result: 'tie',
                            gameEnd:true
                        })
                    } else {
                        setTimeout(()  =>  this.makeAImove() , Math.round(Math.random() * 1000))
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
        if (this.state.isStartPlay) return;
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
                playername: 'Player 1',
                currentPlayer : this.state.playerStart ? 'Player 1' : 'AI PLAYER!'
            } , this.gameStart)
        } else {
            this.setState({
                isStartPlay: true,
                currentPlayer : this.state.playerStart ? this.state.playername : 'AI PLAYER!'
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
                    currentPlayer={this.state.currentPlayer}
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
