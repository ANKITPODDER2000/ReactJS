import React, { Component } from "react";

class Counter extends Component{
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
        }
        this.increment1 = this.increment1.bind(this);
        this.increment2 = this.increment2.bind(this);
        this.increment3 = this.increment3.bind(this);
    }

    /*
    increment1() {
        this.setState({ num: this.state.num + 1, });
        this.setState({ num: this.state.num + 1 });
        this.setState({ num: this.state.num + 1 });
    }
    */


    increment1() {
        this.setState(curState => { return {num : curState.num + 1}});
    }

    increment2() {
        this.setState(curState => { return {num : curState.num + 1}});
        this.setState(curState => { return {num : curState.num + 1}});
    }

    incr3(curState) {
        return { num : curState.num + 3}
    }
    increment3() {
        this.setState(this.incr3);
    }

    render() {
        return (
          <div className="counter">
            <h1>Value of count : {this.state.num}</h1>
            <button onClick={this.increment1}>Increment 1</button>
            <button onClick={this.increment2}>Increment 2</button>
            <button onClick={this.increment3}>Increment 3</button>
          </div>
        );
    }
}
export default Counter;