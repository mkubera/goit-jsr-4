import "./App.css";
import Chuck from "./components/Chuck";
import Chucks from "./components/Chucks";
import Items from "./components/Items";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Items /> */}
        {/* <Chuck /> */}
        <Chucks />
      </header>
    </div>
  );
};

export default App;
