import "./Nav.css";
import { useState } from "react";
import CountryDropDown from "../countryDropDown/CountryDropDown";
import LoginModal from "../LoginModal/LoginModal";

function Nav() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoginVisible(true);
    document.body.style.overflow = isLoginVisible ? "auto" : "hidden";
  };
  return (
    <nav className="header bg-light border-bottom border-3">
      <a
        className="text-center mt-4"
        href="/"
        style={{ borderBottom: "2px solid black", fontSize: "18px" }}
      >
        Sweet-Home
      </a>
      <ul className="user-profile text-center mt-4">
        {/* <li>
          <CountryDropDown />
        </li> */}

        <li className="user-account">
          <button
            href="/login"
            style={{ width: "100px" }}
            className="bg-primary rounded p-2 fs-6 text-light"
            onClick={handleLogin}
          >
            Sign in
          </button>
        </li>
      </ul>
      {isLoginVisible && <LoginModal />}
    </nav>
  );
}

export default Nav;
