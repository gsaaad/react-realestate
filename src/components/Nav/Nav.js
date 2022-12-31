import "./Nav.css";
import CountryDropDown from "../countryDropDown/CountryDropDown";

function Nav() {
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
          <a href="/signup" className="bg-primary rounded p-2 fs-6 text-light">
            Sign in
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
