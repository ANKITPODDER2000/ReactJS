import React, { Component } from "react";
import Pokemon from "./Pokemon";
import "./PokemonBlock.css";

class PokemonBlock extends Component {
    
    render() {
        let dataArr = this.props.data;
        return (
            <div className="PokemonBlock">
                {dataArr.map(d => <Pokemon da={d} />)}
            </div>
        )
    }
 }

export default PokemonBlock;