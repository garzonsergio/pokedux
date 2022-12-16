import "./App.css";
import { Col } from "antd";
import "antd/dist/reset.css";
import { Searcher } from "./Components/Searcher";
import { PokeList } from "./Components/PokeList";
import logo from "./Statics/pokedux.svg";
import { useEffect, useState } from "react";
import { getPokemon } from "./API";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokeRes = await getPokemon();
      setPokemons(pokeRes);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="logo-pokedux" />{" "}
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokeList pokemons={pokemons} />
    </div>
  );
}

export default App;
