import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";

const style = {
    root: {
        position: 'relative',
        width: '20%',
        height: '25%',
        display: 'inline-block',
        margin: '0 auto',
    }
}

class DraggableColorBox extends Component {
    render() {
        const { color , classes} = this.props;
        return (
            <div
                style={{ background: color }}
                className={classes.root}
            >
                <h3>{color}</h3>
            </div>
        );
    }
}

export default withStyles(style)(DraggableColorBox);
