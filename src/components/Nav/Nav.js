import "./Nav.css";
function Nav() {
  return (
    <nav className="header bg-light p-2">
      <a className="text-center" href="/">
        Sweet-Home
      </a>
      <ul className="user-profile text-center">
        <li className="user-account">
          <a href="/login">Login</a>
        </li>
        <li className="user-account">
          <a href="/signup" className="bg-primary rounded p-2 text-light">
            Sign-up
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
