import React, { Component } from 'react';
import { v4 as uuid } from "uuid";
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc"

class NewPaletteColorList extends Component {
    render() {
        return (
            <div style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                alignContent: 'flex-start',
            }}>
                {this.props.colors.map((color , index) =>
                    <DraggableColorBox
                        key={uuid()}
                        index={index}
                        color={color.color}
                        name={color.name}
                        deleteColor={this.props.deleteColor}
                    />
                )}
            </div>
        );
    }
}

export default SortableContainer(NewPaletteColorList);
