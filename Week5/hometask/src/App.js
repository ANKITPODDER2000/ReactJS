import React, { Component } from 'react';
import Heading from "./Heading";
import PokemonBlock from "./PokemonBlock";
import { Array1, Array2 } from "./Data";

let exp1 = 0;
let exp2 = 0;

for (let i = 0; i < 4; i++){
  exp1 += Array1[i]['exp'];
  exp2 += Array2[i]['exp'];
}

let text1, text2, className1, className2;

if (exp1 > exp2) {
  text1 = "Winning Hand";
  text2 = "Losing Hand";
  className1 = "green";
  className2 = "red"
} else {
  text2 = "Winning Hand";
  text1 = "Losing Hand";
  className2 = "green";
  className1 = "red"
}

class App extends Component{
  render() {
    return (
      <div className="App">
        <Heading text={text1} exp={exp1} className={className1} />

        <PokemonBlock
          data={Array1}
        />

        <Heading text={text2} exp={exp2} className={className2} />

        <PokemonBlock
          data={Array2}
        />
        
      </div>
    );
  }
}

export default App;
