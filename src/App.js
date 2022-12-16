import "./App.css";
import { Col } from "antd";
import "antd/dist/reset.css";
import { Searcher } from "./Components/Searcher";
import { PokeList } from "./Components/PokeList";

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokeList />
    </div>
  );
}

export default App;
