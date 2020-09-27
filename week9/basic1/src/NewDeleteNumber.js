import React, { Component } from "react";
import NewNum from "./NewNum";

class NewDeleteNumber extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nums : [1,2,3,4,5 , 6, 7 ],
        }
        this.click = this.click.bind(this);
    }

    click(num) {
        console.log("Come");
        console.log(num);
        this.setState(currentState => {
            let newArr = currentState.nums.filter(a => a !== num);
            return {
                nums: newArr
            }
        })
    }

    render() {
        let nums = this.state.nums.map(num => <NewNum key={num} num={num} click={this.click}/>)
        return (
            <div style={{textAlign:"left"}}>
                <h1>This is 2nd List</h1>
                <ul>
                    {nums}
                </ul>
            </div>
        )
    }
}

export default NewDeleteNumber;