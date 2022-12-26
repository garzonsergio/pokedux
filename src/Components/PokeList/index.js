import React from "react";
import { PokeCard } from "../PokeCard";
import "./style.css";

const PokeList = ({ pokemons }) => {
  console.log("TCL ~ file: index.js:6 ~ PokeList ~ pokemons", pokemons);

  return (
    <div className="PokeList">
      {pokemons.map((pokemon) => {
        return (
          <PokeCard
            name={pokemon.name}
            key={pokemon.name}
            url={pokemon.sprites.front_default}
            description={pokemon.types[0].type.name}
          />
        );
      })}
    </div>
  );
};

export { PokeList };

// This defaultProps full the space of props in case that you are not sending anything yet
// its a great tool to test a UI before connect it with an API or database

PokeList.defaultProps = {
  pokemons: Array(10).fill(""),
};
