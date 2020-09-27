import React, { Component } from "react";
import Num from "./Num";

class DeleteNumber extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nums : [1,2,3,4,5],
        }
    }

    click(num) {
        this.setState(currentState => {
            let newArr = currentState.nums.filter(a => a !== num);
            return {
                nums: newArr
            }
        })
    }

    render() {
        let nums = this.state.nums.map(num => <Num key={num} num={num} click={() => this.click(num)}/>)
        return (
            <div style={{textAlign:"left"}}>
                <h1>This is 1st List</h1>
                <ul>
                    {nums}
                </ul>
            </div>
        )
    }
}

export default DeleteNumber;