import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from "@material-ui/styles";
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import style from "./stylesheet/Board";
import "./Board.css"

class Board extends Component {
    geyStyle(board) {
        let style = {'position' : 'absolute'}
        for (let i = 0; i < 3; i++){
            if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0]!=='') {
                style['height'] = '3px';
                style['width'] = '300px';
                style['left'] = '0px';
                style['top'] = String((i * 100) + 48.5+(i*2)) + 'px';
                style['transformOrigin'] = 'left';
                style['animation'] = 'aniX 2s linear forwards';
                style['transform'] = 'scaleX(0)';
            }
        }

        for (let i = 0; i < 3; i++){
            if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i]!=='') {
                style['width'] = '3px';
                style['height'] = '306.5px';
                style['top'] = '0px';
                style['left'] = String((i * 100) + 48.5) + 'px';
                style['transformOrigin'] = 'top';
                style['animation'] = 'aniY 2s linear forwards';
                style['transform'] = 'scaleY(0)';
            }
        }
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') { 
            style['width'] = '3px';
            style['height'] = '425px';
            style['left'] = '0';
            style['transformOrigin'] = 'top';
            style['animation'] = 'aniXY 2s linear forwards';
            style['transform'] = 'scaleY(1) rotate(-44deg)';
        }
        if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[1][1] !== '') { 
            style['width'] = '3px';
            style['height'] = '0px';
            style['right'] = 0;
            style['transformOrigin'] = 'top';
            style['animation'] = 'aniXY 2s linear forwards';
            style['transform'] = 'scaleY(1) rotate(44deg)';
        }
        return style;
    }
    render() {
        const { classes } = this.props;
        let board = [];
        for (let i = 0; i < 3; i++){
            board.push(
                <tr key={i}>
                    <td
                        className={`right ${this.props.arr.includes(`${i}-0`) && 'help'}`}
                        key={`${i}-0`}
                        onClick={() => this.props.tdClick(`${i}-0`)}
                    >
                        {this.props.board[i][0]}
                    </td>

                    <td
                        className={`con ${this.props.arr.includes(`${i}-1`) && 'help'}`}
                        key={`${i}-1`}
                        onClick={() => this.props.tdClick(`${i}-1`)}
                    >
                        {this.props.board[i][1]}
                    </td>
                    <td
                        className={`left ${this.props.arr.includes(`${i}-2`) && 'help'}`}
                        key={`${i}-2`}
                        onClick={() => this.props.tdClick(`${i}-2`)}
                    >
                        {this.props.board[i][2]}
                    </td>
                </tr>
            )
        }
        return (
            <div className={classes.container}>
                {this.props.isStartPlay ?
                    <div className={classes.formContainer}>
                        {this.props.gameEnd
                            ?
                            this.props.result === 'tie'
                                ?
                                <h1 style={{marginBottom: '10px'}}>Match Tie !!</h1>
                                : 
                                <h1 style={{marginBottom: '10px'}}>{ this.props.result } : Winner 🔥🔥🔥</h1>
                            :
                            <h1 style={{marginBottom: '10px'}}>{this.props.currentPlayer} : IT's YOUR TURN</h1>
                        }
                        <div>
                            <Button style={{fontFamily: 'Poppins, sans-serif'}} variant="contained" color="secondary" className={classes.btn} onClick={this.props.restart}>RESTART</Button>
                            {
                                this.props.gameEnd
                                    ?
                                    null
                                    :
                                    <Button style={{fontFamily: 'Poppins, sans-serif'}} variant="contained" color="primary" className={classes.btn} onClick={this.props.quit}>QUIT!</Button>
                            }
                        </div>
                    </div>
                    :
                    <div className={classes.formContainer}>
                        <div className={classes.topContainer}>
                            <h1>Do you want to give first move?</h1>
                            <Switch
                                checked={this.props.playerStart}
                                onChange={this.props.handleChangeplayerStart}
                                name="playerStart"
                            />
                        </div>
                        <div className={classes.bottomContainer}>
                            <div>
                                <input type="text"
                                    placeholder="Please enter your name "
                                    value={this.props.playername}
                                    onChange={this.props.handleInputChange}
                                />
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={this.props.startPlay}
                                    className={classes.btnStart}
                                    style={{fontFamily: 'Poppins, sans-serif'}}
                                >
                                    Start Play!
                                </Button>
                            </div>
                        </div>
                        <div className={classes.select}>
                            <h2>Level  : </h2>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.props.level}
                                onChange={this.props.handleLevel}
                            >
                                <MenuItem value={'easy'}>Easy</MenuItem>
                                <MenuItem value={'mid'}>Medium</MenuItem>
                                <MenuItem value={'hard'}>Impossible</MenuItem>
                            </Select>
                        </div>
                    </div>
                }
                {this.props.isStartPlay
                    ?
                        <div className='table'>
                            {
                                (this.props.result !== 'tie' && this.props.result !== '')
                                ?
                                <span className={ "span spanActive" } style={this.geyStyle(this.props.board)}></span>
                                :
                                null
                            }
                            <table>
                                <tbody>
                                    {board}
                                </tbody>
                            </table> 
                        </div>
                    :
                        null
                }
                
            </div>
        );
    }
}

export default withStyles(style)(Board);