import React, { Component } from "react";

class NewNum extends Component {
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
    }
    remove() {
        //console.log("Hey");
        //console.log(this.props.num);
        this.props.click(this.props.num);
    }
  render() {
    return (
      <li>
        <h3 style={{ display: "inline", marginRight: "20px" }}>
          {this.props.num}
        </h3>
        {/*<button onClick={(e) => this.props.click(this.props.num)}>x</button>*/}
        <button onClick={this.remove}>x</button>
      </li>
    );
  }
}

export default NewNum;
