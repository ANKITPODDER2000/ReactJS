import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from "@material-ui/styles";
import Button from '@material-ui/core/Button';
import Res from "./Responsive";
import "./Board.css"

const style = {
    "@global": {
        ".table": {
            margin: '50px auto 0',
            width: '300px',
            height: '306.5px',
            position: 'relative',
        },
        "table": {
            position: 'relative',
            width : '300px',
            height: '300px',
            background:' transparent',
        },
        'table tr': {
            position: 'relative',
            width: '100%',
            height: '100px',
            border: 'none',
        },
        'table tr td': {
            position: 'relative',
            height: '100px',
            width: '100px',
            color: props => props.isNight ? '#fff' : '#000',
            textAlign: 'center',
            fontSize: '40px',
            fontFamily: "srif"
        },
        'table tr:nth-child(1) td': {
            borderBottom: props => props.isNight ? "2px solid #fff" : '2px solid #000',
        },
        'table tr:nth-child(3) td': {
            borderTop: props => props.isNight ? "2px solid #fff" : '2px solid #000',
        },
        'table tr td.right': {
            borderRight: props => props.isNight ? "2px solid #fff" : '2px solid #000',
        },
        'table tr td.left': {
            borderLeft: props => props.isNight ? "2px solid #fff" : '2px solid #000',
        },
        '::placeholder': {
            color: props => props.isNight ? '#fff7' : '#0007'
        },
        '.MuiButtonBase-root': {
            [Res('480')]: {
                fontSize : '14px'
            },
            [Res('410')]: {
                fontSize : '11px'
            },
            [Res('330')]: {
                fontSize : '10px'
            }
        },
        ".span" : {
            background: props => props.result === 'Player 1' ? '#32CD32' : '#f00',
            zIndex : '10'
        },
        ".help": {
            color : props => props.result === 'Player 1' ? '#32CD32' : '#f00',
        }
    },
    container: {
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 60px)',
        background: props => props.isNight ? '#000' : '#fff',
        padding: '10px 0'
    },
    formContainer: {
        position: 'relative',
        width: '80%',
        margin :'20px auto 0',
        padding: '25px 10%',
        background: props => props.isNight ? '#fff8' : '#0002',
        textAlign: 'center',
        [Res('1105')]: {
            padding : '20px'
        },
        [Res('901')]: {
            width: '95%'
        },
        [Res('432')]: {
            padding : '20px 10px'
        },
        '& h1': {
            [Res('731')]: {
                fontSize : '16px'
            },
            [Res('432')]: {
                fontSize: '14px',
                marginRight : '10px'
            }
        },
        
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px',
        '& h1': {
            marginRight: '20px',
            textTransform: 'uppercase',
            fontFamily: 'Poppins, sans-serif'
        },
    },
    bottomContainer: {
        position:' relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        "& input" : {
            background: 'none',
            border: 'none',
            outline: 'none',
            borderBottom: '2px solid #f50057',
            height: '36px',
            padding: '4px 15px',
            marginRight: '20px',
            fontSize: '18px',
            width: '250px',
            fontFamily: 'Poppins, sans-serif',
            [Res('480')]: {
                width: 'fit-content',
                fontSize: '16px',
                padding : '4px 8px'
            },
            [Res('410')]: {
                fontSize : '12px'
            },
            [Res('330')]: {
                fontSize : '11px'
            }
        }
    },
    btn: {
        margin : '0 15px'
    },
    btnStart: {
        [Res('330')]: {
            padding : '5px 10px'
        }
    }
}

class Board extends Component {
    geyStyle(board) {
        let style = {'position' : 'absolute'}
        for (let i = 0; i < 3; i++){
            if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0]!=='') {
                style['height'] = '3px';
                style['width'] = '300px';
                style['left'] = '0px';
                style['top'] = String((i * 100) + 48.5) + 'px';
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
                                <h1 style={{marginBottom: '10px'}}>{ this.props.result } is the winner of the Game!</h1>
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