import "./App.css";
import Album from "./components/Album";
import Chuck from "./components/Chuck";
import Chucks from "./components/Chucks";
import Items from "./components/Items";
import Title from "./components/Title";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Items /> */}
        {/* <Title /> */}
        {/* <Chuck /> */}
        {/* <Chucks /> */}
        <Album />
      </header>
    </div>
  );
};

export default App;
