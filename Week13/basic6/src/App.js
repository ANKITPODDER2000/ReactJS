import React ,{ Component } from "react";
import Nav from "./Nav";
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
            isNight: true,
            playerSymbol: 'X',
            board : this.makeInitialBoard()
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
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
    handleSelectChange(e) {
        this.setState({
            playerSymbol : e.target.value
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Nav
                    handleSelectChange={this.handleSelectChange}
                    handleChange={this.handleChange}
                    playerSymbol={this.state.playerSymbol}
                    isNight={this.state.isNight}
                />
            </div>
        )
    }
}

export default withStyles(style)(App);
