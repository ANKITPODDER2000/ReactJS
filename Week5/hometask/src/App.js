import React, { Component } from 'react';
import Heading from "./Heading";
import PokemonBlock from "./PokemonBlock";

class App extends Component{
  render() {
    return (
      <div className="App">
        <Heading text="Losing Hand" exp={[62 , 63 , 72 , 178]} className="red" />

        <PokemonBlock
          data={[
            [
              "Charmander",
              "4",
              "Fir",
              62,
            ],

            [
              "Squirtel",
              "7",
              "Water",
              63,
            ],

            [
              "Metapod",
              "11",
              "Bug",
              72,
            ],

            [
              "Butterfree",
              "12",
              "Flying",
              178,
            ],
          ]}
        />

        <Heading text="Winning Hand" exp={[112 , 95 , 225 , 65]} className="green" />

        <PokemonBlock
          data={[
            [
              "Pikachu",
              "25",
              "Electric",
              112,
            ],

            [
              "Jigglipuff",
              "39",
              "Normal",
              95,
            ],

            [
              "Gengar",
              "94",
              "Poison",
              225,
            ],

            [
              "Eevee",
              "133",
              "Normal",
              65,
            ],
          ]}
        />
        
      </div>
    );
  }
}

export default App;
