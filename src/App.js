import "./App.css";
import Nav from "./components/Nav/Nav";
import HousesForSale from "./components/HousesForSale/HousesForSale";
import Clock from "./components/Clock/Clock";

function App() {
  return (
    <div className="App">
      <Nav />
      <Clock />
      <HousesForSale />
    </div>
  );
}

export default App;
