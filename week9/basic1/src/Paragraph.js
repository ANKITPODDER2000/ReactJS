import React, { Component } from "react";

class Paragraph extends Component{
    COPY() {
        alert("Don't copy!");
    }
    render() {
        return (
            <p onCopy={this.COPY}>
                loremloremloremloremloremloremloremloremloremloremloremloremlorem loremloremloremlorem  loremloremloremloremloremloremloremloremlorem
            </p>
        )
    }
}

export default Paragraph;