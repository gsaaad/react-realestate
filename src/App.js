import "./App.css";
import Nav from "./components/Nav/Nav";
import HousesForSale from "./components/HousesForSale/HousesForSale";
import Clock from "./components/Clock/Clock";
import SubNav from "./components/SubNav/SubNav";
import SearchHouses from "./components/SearchHouses/SearchHouses";
import HomeBlog from "./components/HomeBlog/HomeBlog";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import CodeEthics from "./components/CodeEthics/CodeEthics";
import PropertyServices from "./components/PropertyServices/PropertyServices";
import LoginModal from "./components/LoginModal/LoginModal.js";
import Login from "./components/Login/Login.js";
function App() {
  return (
    <div className="App ">
      <Nav />
      <SubNav />
      <Login />
      {/* <LoginModal /> */}
      {/* <PropertyServices /> */}
      {/* {/* <SearchHouses /> */}
      {/* <Clock /> */}
      {/* <HousesForSale /> */}
      {/* <HomeBlog /> */}
      {/* <PrivacyPolicy /> */}
      {/* <CodeEthics /> */}
      <Footer /> */
    </div>
  );
}

export default App;
