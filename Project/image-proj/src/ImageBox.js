import React, { Component } from "react";
import "./ImageBox.css"
class ImageBox extends Component{
    render() {
        return (
            <div className="img-box">
                <img src={this.props.details['largeImageURL']} alt={this.props.details.id} />
                <div className="tags">
                    {this.props.details.tags.split(",").map(tag => <span>{tag.toUpperCase()}</span>)}
                </div>
                <h1>Captured by : {this.props.details.user}</h1>
            </div>
        )
    }
}

export default ImageBox;