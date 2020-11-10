import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from "@material-ui/styles";
import Button from '@material-ui/core/Button';
import Res from "./Responsive";

const style = {
    "@global": {
        "table": {
            position: 'relative',
            width : '300px',
            height: '300px',
            background:' transparent',
            margin:' 50px auto 0',
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
            fontFamily: "Montserrat, sans-serif"
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
            }
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
        alignItems: 'center',
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
            }
        }
    },
    btn: {
        margin : '0 15px'
    }
}

class Board extends Component {
    render() {
        const { classes } = this.props;
        let board = [];
        for (let i = 0; i < 3; i++){
            board.push(
                <tr key={i}>
                    <td
                        className="right"
                        key={`${i}-0`}
                        onClick={() => this.props.tdClick(`${i}-0`)}
                    >
                        {this.props.board[i][0]}
                    </td>

                    <td
                        key={`${i}-1`}
                        onClick={() => this.props.tdClick(`${i}-1`)}
                    >
                        {this.props.board[i][1]}
                    </td>
                    <td
                        className="left"
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
                            <h1 style={{marginBottom: '10px'}}>{this.props.playername} : IT's YOUR TURN</h1>
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
                                style={{fontFamily: 'Poppins, sans-serif'}}
                            >
                                Start Play!
                            </Button>
                        </div>
                    </div>
                }
                {this.props.isStartPlay
                    ?
                        <table>
                            <tbody>
                                {board}
                            </tbody>
                        </table> 
                    :
                        null
                }
                
            </div>
        );
    }
}

export default withStyles(style)(Board);