import React from "react";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const PokeCard = () => {
  return (
    <Card
      title="Bulbasaur"
      cover={
        <img
          src="https://static.wikia.nocookie.net/espokemon/images/4/43/Bulbasaur.png"
          alt="Bulbasaur"
        />
      }
    >
      <Meta description="Plant, Water" />
    </Card>
  );
};
export { PokeCard };
