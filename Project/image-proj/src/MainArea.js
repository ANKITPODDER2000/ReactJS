import React, { Component } from "react";
import ImageBox from "./ImageBox";
import Input from "./Input";
import "./MainArea.css"

class MainArea extends Component{
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
        this.addImages = this.addImages.bind(this);
    }
    addImages(images) {
        this.setState({
            images : images
        })
    }
    render() {
        return (
            <div className="area">
                <Input addImages={this.addImages} />
                {
                    this.state.images.length === 0
                        ? 
                        <div>
                            <h1>Please Search with a Proper name!</h1>
                        </div>
                        :
                        <div className="images">
                            {this.state.images.map(image => <ImageBox key={image['id']} details={image}/>)}
                        </div>
                }
            </div>
        )
    }
}

export default MainArea;