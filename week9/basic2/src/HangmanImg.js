import React, { Component } from "react";
import img0 from "./image/0.jpg"
import img1 from "./image/1.jpg"
import img2 from "./image/2.jpg"
import img3 from "./image/3.jpg"
import img4 from "./image/4.jpg"
import img5 from "./image/5.jpg"
import img6 from "./image/6.jpg"
import img7 from "./image/7.jpg"
import img8 from "./image/8.jpg"
import img9 from "./image/9.jpg"
import img10 from "./image/10.jpg"
import "./HangmanImg.css";

class HangmanImg extends Component{
    static defaultProps = {
        imgArr : [img0 , img1 , img2 , img3 , img4 , img5 , img6 , img7 , img8 , img9 , img10],
    }
    render() {
        return (
            <img className="HangmanImg" src={this.props.imgArr[this.props.img_num]} alt="img1" />
        )
    }
}

export default HangmanImg;