import React from "react";
import { PokeCard } from "../PokeCard";
import "./style.css"

const PokeList = ({ pokemons }) => {
  return (
    <div className="PokeList">
      {pokemons.map((pokemon) => {
        return <PokeCard />;
      })}
    </div>
  );
};

export { PokeList };

PokeList.defaultProps = {
  pokemons: Array(10).fill(""),
};
