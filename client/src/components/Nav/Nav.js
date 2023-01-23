import "./Nav.css";
import CountryDropDown from "../countryDropDown/CountryDropDown";

function Nav() {
  const handleLogin = (e) => {
    e.preventDefault();
    const loginContainer = document.getElementsByClassName("signin-container");
    if (loginContainer[0].getAttribute("style") === "display: none;")
      loginContainer[0].setAttribute("style", "display: block;");
  };
  return (
    <nav className="header bg-light border-bottom border-3">
      <a className="text-center" href="/">
        Sweet-Home
      </a>
      <ul className="user-profile text-center mt-4">
        <li>
          <CountryDropDown />
        </li>

        <li className="user-account">
          <button
            href="/login"
            className="bg-primary rounded p-2 fs-6 text-light"
            onClick={handleLogin}
          >
            Sign in
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
