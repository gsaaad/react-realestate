import "./App.css";
import Nav from "./components/Nav/Nav";
import HousesForSale from "./components/HousesForSale/HousesForSale";
import Clock from "./components/Clock/Clock";
import SearchHouses from "./components/SearchHouses/SearchHouses";
import SubNav from "./components/SubNav/SubNav";
function App() {
  return (
    <div className="App ">
      <Nav />
      <SubNav />

      {/* <SearchHouses /> */}
      {/* <Clock /> */}
      {/* <HousesForSale /> */}
    </div>
  );
}

export default App;
