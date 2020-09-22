import React, { Component } from "react";
import "./Pokemon.css";
function processNum(a) {
  return ("00" + String(a)).slice(-3);
}
class Pokemon extends Component { 
    
    render() {
        let img =
          "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/" +
          processNum(this.props.da[1]) +
          ".png";
        return (
          <div className="Pokemon">
            <div className="img">
              <img src={img} />
            </div>
            <h1>{this.props.da[0]}</h1>
            <p>
              Type : {this.props.da[2]} || Exp : {this.props.da[3]}
            </p>
          </div>
        );
    }
}

export default Pokemon;