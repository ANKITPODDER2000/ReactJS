import React, { Component } from "react";
import Cell from "./Cell";
import Header from "./Header";
import "./Board.css";

class Board extends Component{
    static defaultProps = {
        norow: 5, 
        nocol : 5
    }

    constructor(props) {
        super(props);
        let matrix = this.createMatrix();
        this.state = {
            matrix: matrix,
            win : false
        }
        this.click = this.click.bind(this);
    }
    restart() {
        let matrix = this.createMatrix();
        this.setState({
            matrix: matrix,
            win: false
        });
    }
    createMatrix() {
        let arr = [];
        for (let i = 0; i < this.props.norow; i++){
            let innerArray = [];
            for (let j = 0; j < this.props.nocol; j++){
                let a = Math.floor(Math.random() * 100);
                if (a <= 75) {
                    innerArray.push(false); //false -> Light is off
                } else {
                    innerArray.push(true); //true -> Light is on
                }
            }
            arr.push(innerArray);
        }
        return arr;
    }
    changeMatrix(currentState, copyMatrix) {
        for (let i = 0; i < this.props.norow; i++){
            for (let j = 0; j < this.props.nocol; j++){
                if (!copyMatrix[i][j]) {
                    return {
                        matrix: copyMatrix
                    }
                }
            }
        }
        return {
            matrix: copyMatrix, 
            win   : true
        }
    }
    click(pos) {
        let [x, y] = pos.split("_");
        x = Number(x);
        y = Number(y);
        let copyMatrix = this.state.matrix;
        copyMatrix[x][y] = !copyMatrix[x][y];
        if (x - 1 >= 0)
            copyMatrix[x - 1][y] = !copyMatrix[x - 1][y];
        if (x + 1 < this.props.norow)
            copyMatrix[x + 1][y] = !copyMatrix[x + 1][y];
        if (y - 1 >= 0)
            copyMatrix[x][y - 1] = !copyMatrix[x][y - 1];
        if (y + 1 < this.props.nocol)
            copyMatrix[x][y + 1] = !copyMatrix[x][y + 1];
        /*
        for (let x = 0; x < 5; x++){
            for (let y = 0; y < 5; y++){
                copyMatrix[x][y] = true
            }
        }
        */
        this.setState(currentState => this.changeMatrix(currentState , copyMatrix));
    }

    render() {
        let arr = [];
        for (let i = 0; i < this.props.norow; i++){
            let innerArray = [];
            for (let j = 0; j < this.props.nocol; j++){
                if (this.state.matrix[i][j]) {
                    innerArray.push(<Cell
                        class="light-on"
                        key={String(i) + "_" + String(j)} 
                        pos={String(i) + "_" + String(j)} 
                        handleClick={this.click}
                    />);
                } else {
                    innerArray.push(<Cell
                        key={String(i) + "_" + String(j)}
                        pos={String(i) + "_" + String(j)}
                        handleClick={this.click}
                    />);
                }
            }
            arr.push(innerArray);
        }
        return (
            <div>
                {!this.state.win
                    ?
                    <div>
                        <Header first="Light" second="Out" />
                        <table>
                            <tbody>
                                {arr.map((ele, ind) => <tr key={ind} >{ele}</tr>)}
                            </tbody>
                        </table>
                        <button onClick={this.restart.bind(this)}>Restart ?</button>
                    </div>
                    :
                    <div>
                        <Header clnm="winner" first="You" second="Win!" />
                        <button onClick = {this.restart.bind(this)}>Play Again?</button>
                    </div>}
            </div>
        )
    }
}

export default Board;