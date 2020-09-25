import React, { Component } from 'react';
import Box from "./Box";

class ColorBoard extends Component{
    

    render() {
        let box = [];
        for (let i = 0; i < 16; i++)
            box.push(
                <Box/>
            )
        return box;
    }
}

export default ColorBoard;