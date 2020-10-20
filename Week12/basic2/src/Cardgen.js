import React, { Component } from 'react';
import Card from "./Card";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import "./Cardgen.css"

const BASE_URL = "https://deckofcardsapi.com/api/deck/";

class Cardgen extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            deck_id: null,
            showBtn : false,
            card : []
        }
        this.handleClick = this.handleClick.bind(this);
    }
    async componentDidMount() {
        let url = `${BASE_URL}new/shuffle`;
        let res = await axios.get(url);
        this.setState({
            deck_id: res.data.deck_id,
            showBtn : true
        })
    }
    async handleClick() {
        try {
            let url = `${BASE_URL}${this.state.deck_id}/draw/`;
            let res = await axios.get(url);
            //console.log(res.data);
            
            let x = (Math.random() * 40) - 20;
            let y = (Math.random() * 40) - 20;
            let r = (Math.random() * 80) - 40;
            let t = `translate(${x}px, ${y}px) rotate(${r}deg)`;

            if (res.data.remaining === 0) {
                this.setState({
                    showBtn : false,
                    card : [...this.state.card , { img : res.data.cards[0].image , code : res.data.cards[0].code , transform : t}]
                })
            } else {
                this.setState({
                    card : [...this.state.card , { img : res.data.cards[0].image , code : res.data.cards[0].code , transform : t}]
                })
            }
        }
        catch{
            let a = null;
        }
    }
    render() {
        return (
            <div className="card-gen">
                <h1>◆ CARD DEALER ◆</h1>
                <p>◎ A LITTLE DEMO MADE WITH REACT ◎</p>
                {this.state.showBtn ? <button onClick={this.handleClick} className={this.state.class_name}>GET CARD</button> : null}
                <div className="all-card">
                    {this.state.card.map(c => <Card PROPS={c} key={uuidv4()}/>)}
                </div>
            </div>
        )
    }
}

export default Cardgen;