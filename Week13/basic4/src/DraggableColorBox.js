import React, { Component } from 'react';
import { withStyles } from "@material-ui/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import style from "./stylesheet/DraggableColorBox";
import { SortableElement  } from "react-sortable-hoc";


class DraggableColorBox extends Component {
    constructor(props) {
        super(props);
        this.deleteColor = this.deleteColor.bind(this);
    }
    deleteColor() {
        this.props.deleteColor(this.props.name);
    }
    render() {
        const { color , name , classes} = this.props;
        return (
            <div
                style={{ background: color }}
                className={classes.root}
            >
                <div className={classes.textContainer}>
                    <p>{name}</p>
                    <DeleteIcon
                        className={classes.icon}
                        onClick={this.deleteColor}
                    />
                </div>
            </div>
        );
    }
}

export default withStyles(style)(SortableElement(DraggableColorBox));
