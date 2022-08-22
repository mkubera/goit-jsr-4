// import logo from "./logo.svg";
import "./App.css";
import Chuck from "./components/Chuck";
import Items from "./components/Items";
// import PureTest from "./components/PureTask";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* 
        <PureTest />
         */}
        {/* <Chuck /> */}
        <Items />
      </header>
    </div>
  );
};

export default App;
