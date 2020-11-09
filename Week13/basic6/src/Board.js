import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from "@material-ui/styles";
import Button from '@material-ui/core/Button';
import "./Board.css";

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
            color:' #fff',
            textAlign: 'center',
            fontSize: '40px',
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
        textAlign : 'center'
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        '& h1': {
            marginRight: '20px',
            textTransform : 'uppercase'
        },
        marginBottom : '20px'
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
            fontFamily: 'consolas',
            fontSize: '18px',
            width:'250px'
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
                            <h1 style={{marginBottom:"15px"}}>{ this.props.result } is the winner of the Game!</h1>
                            :
                            <h1 style={{marginBottom:"15px"}}>{this.props.playername} : IT's YOUR TURN</h1>
                        }
                        <div>
                            <Button variant="contained" color="secondary" className={classes.btn} onClick={this.props.restart}>RESTART</Button>
                            {
                                this.props.gameEnd
                                    ?
                                    null
                                    :
                                    <Button variant="contained" color="primary" className={classes.btn} onClick={this.props.quit}>QUIT!</Button>
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