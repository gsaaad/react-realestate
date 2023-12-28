import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";

import SubNav from "./components/SubNav/SubNav";
import SearchHouses from "./components/SearchHouses/SearchHouses";
import HomeBlog from "./components/HomeBlog/HomeBlog";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import CodeEthics from "./components/CodeEthics/CodeEthics";
import PropertyServices from "./components/PropertyServices/PropertyServices";
import LoginModal from "./components/LoginModal/LoginModal.js";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import Home from "./pages/homes";
import PNF from "./components/PNF/PNF.js";
import MortgageCalculator from "./components/MortgageCalculator/MortgageCalculator";
import Warranty from "./components/Warranty/Warranty";
import SearchAgents from "./components/SearchAgents/SearchAgents";
import { LoginModalProvider } from "./context/LoginModalProvier";

function App() {
  return (
    <LoginModalProvider>
      <Router>
        <div className="App">
          <Nav />
          <SubNav />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/services" element={<PropertyServices />} />
              <Route path="/sweethomes" element={<SearchHouses />} />
              <Route path="/sweetagents" element={<SearchAgents />} />
              <Route path="/blog" element={<HomeBlog />} />
              <Route path="/policy" element={<PrivacyPolicy />} />
              <Route path="/ethics" element={<CodeEthics />} />
              <Route path="/calculator" element={<MortgageCalculator />} />
              <Route path="/warranty" element={<Warranty />} />
              <Route path="*" element={<PNF />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </LoginModalProvider>
  );
}

export default App;
