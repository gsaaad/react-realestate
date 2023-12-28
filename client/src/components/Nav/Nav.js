import "./Nav.css";
import CountryDropDown from "../countryDropDown/CountryDropDown";
import LoginModal from "../LoginModal/LoginModal";
import { useLoginModal } from "../../context/LoginModalProvier";
function Nav() {
  const { isLoginVisible, setIsLoginVisible } = useLoginModal();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("clicked");
    console.log("setIsLoginVisible", isLoginVisible);
    setIsLoginVisible(true);
    // disable scroll
    document.body.style.overflow = "hidden";
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
