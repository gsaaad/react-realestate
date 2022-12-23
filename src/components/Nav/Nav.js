import "./Nav.css";
function Nav() {
  return (
    <nav className="header">
      <span>Sweet-Home</span>
      <ul className="user-profile">
        <li className="user-account">Login</li>
        <li className="user-account">Sign-Up</li>
      </ul>
    </nav>
  );
}

export default Nav;
