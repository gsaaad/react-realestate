import "./App.css";
import Nav from "./components/Nav/Nav";
import HousesForSale from "./components/HousesForSale/HousesForSale";
import Clock from "./components/Clock/Clock";
import SubNav from "./components/SubNav/SubNav";
import SearchHouses from "./components/SearchHouses/SearchHouses";
import HomeBlog from "./components/HomeBlog/HomeBlog";
function App() {
  return (
    <div className="App ">
      <Nav />
      <SubNav />
      {/* <SearchHouses /> */}
      {/* <Clock /> */}
      {/* <HousesForSale /> */}
      <HomeBlog />
    </div>
  );
}

export default App;
