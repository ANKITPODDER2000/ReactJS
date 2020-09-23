import React, { Component } from "react";
import "./Pokemon.css";
function processNum(a) {
  return ("00" + String(a)).slice(-3);
}
class Pokemon extends Component { 
    consol
    render() {
        let img =
          "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/" +
          processNum(this.props.da['id']) +
          ".png";
        return (
          <div className="Pokemon">
            <div className="img">
              <img src={img} />
            </div>
            <h1>{this.props.da['name']}</h1>
            <p>
              Type : {this.props.da["type"]} || Exp : {this.props.da['exp']}
            </p>
          </div>
        );
    }
}

export default Pokemon;