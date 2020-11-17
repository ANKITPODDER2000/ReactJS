import React, { Component } from "react";
//Import Nav Component
import Nav from "./Nav";
//Import Board Component
import Board from "./Board";
import {winner,isTie, maxmin, minimax,getMatrixSuccess} from "./Helperfunction";



class App extends Component{
    constructor(props) {
        let isNight =
            JSON.parse(window.localStorage.getItem('isNight')) === null
                ?
                true
                :
                JSON.parse(window.localStorage.getItem('isNight'));
        super(props);
        this.state = {
            isNight:  isNight,                  // Determine theme of the game
            playerSymbol: window.localStorage.getItem('playerSymbol') || 'X',              //Player symbol -> X / O
            board: this.makeInitialBoard(), // this is the board for the game!
            isStartPlay: false,              // it is used to determine whether play start or not ?
            playername: window.localStorage.getItem('playername') || 'Player 1',         //Player name , default player1 , but initialize with -> ''
            playerStart: JSON.parse(window.localStorage.getItem('playerStart')) || false,              // To determine whether player Starts the Game or AI
            gameEnd : false,
            result: '',
            currentPlayer: '',
            level : window.localStorage.getItem('level') || 'easy',
            arr : []
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
        this.handleLevel             = this.handleLevel.bind(this);
        this.randomMove              = this.randomMove.bind(this);
        this.makeWrongAImove         = this.makeWrongAImove.bind(this);
    }
    quit() {
        this.setState({
            gameEnd : true,
            result : 'AI PLAYER'
        })
    }
    handleLevel(e) {
        this.setState({
            level :  e.target.value
        } , () => window.localStorage.setItem('level' , this.state.level))
    }
    restart() {
        this.setState({                  // Determine theme of the game
            playerSymbol: window.localStorage.getItem('playerSymbol'),              //Player symbol -> X / O
            board: this.makeInitialBoard(), // this is the board for the game!
            isStartPlay: false,             // it is used to determine whether play start or not ?
            playername: window.localStorage.getItem('playername'),                 //Player name , default player1 , but initialize with -> ''
            playerStart: JSON.parse(window.localStorage.getItem('playerStart')),              // To determine whether player Starts the Game or AI
            gameEnd : false,
            result: '',
            arr : []
        })
    }
    //This is for the easy mode
    randomMove() {
        if (this.state.playerStart || this.state.result !== '' || this.state.gameEnd) return;
        let x, y;
        do {
            x = Math.floor(Math.random() * 3);
            y = Math.floor(Math.random() * 3);
        } while (this.state.board[x][y] !== '');
        let newBoard = this.state.board.slice();
        let sym;
        if (this.state.playerSymbol === 'X') sym = 'O';
        else sym = 'X';
        newBoard[x][y] = sym;
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
                    }, () => {
                            let arr = getMatrixSuccess(this.state.board);
                            this.setState({
                                arr : arr
                            })
                        }
                    )
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
    //This is for midium mode 
    makeWrongAImove() {
        if (this.state.playerStart || this.state.result !== '' || this.state.gameEnd) return;
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
                    }, () => {
                            let arr = getMatrixSuccess(this.state.board);
                            this.setState({
                                arr : arr
                            })
                        }
                    )
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
    //This is for the hard mode
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
        let board = this.state.board.slice();
        let sym , score , pos , bestScore = -Infinity;
        if (this.state.playerSymbol === 'X') sym = 'O';
        else sym = 'X';
        let scores;
        if (sym === 'X') {
            scores = {'X' : 10 , 'O' : -10 , 'tie' : 0}
        } else {
            scores = {'X' : -10 , 'O' : 10 , 'tie' : 0}
        }
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if (board[i][j] === '') {
                    board[i][j] = sym;
                    //function minimax(board, depth, isMaximizing , ai , human)
                    score = minimax(
                        board,
                        0,
                        false,
                        sym,
                        this.state.playerSymbol,
                        scores
                    );
                    //console.log(score);
                    board[i][j] = '';
                    if (score > bestScore) {
                        bestScore = score;
                        pos = {x : i , y : j}
                    }
                    
                }
            }
        }
        //console.log(pos);
        //console.log(board)
        //console.log(x, y);
        let newBoard = this.state.board.slice();
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
                    }, () => {
                            let arr = getMatrixSuccess(this.state.board);
                            this.setState({
                                arr : arr
                            })
                        }
                    )
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
            setTimeout(() => {
                if (this.state.level === 'hard') this.makeAImove();
                else if (this.state.level === 'mid') this.makeWrongAImove();
                else this.randomMove();
            },Math.round(Math.random() * 1000))
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
                    }, () => {
                            let arr = getMatrixSuccess(this.state.board);
                            this.setState({
                                arr : arr
                            })
                        }
                    )
                } else {
                    if (isTie(this.state.board)) {
                        this.setState({
                            result: 'tie',
                            gameEnd:true
                        })
                    } else {
                        setTimeout(()  =>  {
                            if (this.state.level === 'hard') this.makeAImove();
                            else if (this.state.level === 'mid') this.makeWrongAImove();
                            else this.randomMove();
                        } , Math.round(Math.random() * 1000))
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
        } , () => window.localStorage.setItem('isNight' , JSON.stringify(this.state.isNight)))
    }
    handleChangeplayerStart(e) {
        this.setState({
            playerStart : !this.state.playerStart
        } , () => window.localStorage.setItem('playerStart' , JSON.stringify(this.state.playerStart)))
    }
    handleSelectChange(e) {
        if (this.state.isStartPlay) return;
        this.setState({
            playerSymbol : e.target.value
        } , () => window.localStorage.setItem('playerSymbol' , this.state.playerSymbol))
    }
    handleInputChange(e) {
        this.setState({
            playername : e.target.value
        })
    }
    startPlay() {
        window.localStorage.setItem('playername', this.state.playername);
        window.localStorage.setItem('playerSymbol', this.state.playerSymbol);
        window.localStorage.setItem('isNight' , JSON.stringify(this.state.isNight));
        if (this.state.playername === '') {
            window.localStorage.setItem('playername', 'Player 1');
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
                    quit={this.quit}
                    arr={this.state.arr}
                    level={this.state.level}
                    handleLevel={this.handleLevel}
                />
            </div>
        )
    }
}

export default App;
