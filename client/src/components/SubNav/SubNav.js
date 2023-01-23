import "./SubNav.css";
function SubNav() {
  return (
    <div className="text-dark border border-dark bg-seconary bg-gradient sub-nav">
      <ul className="row me-3 mt-2 ">
        <li className="col sub-item bg-light bg-gradient">
          <a className="text-center" href="/sweethomes">
            Find a Sweet House
          </a>
        </li>
        <li className="col sub-item bg-light bg-gradient">
          <a className="text-center" href="/sweetagents">
            Find a Sweet Agent
          </a>
        </li>
        <li className="col sub-item bg-light bg-gradient ">
          <a href="/services">Services</a>
        </li>
        <li className="col sub-item bg-light bg-gradient">
          Mortgage Calculators
        </li>
        <li className="col sub-item bg-light bg-gradient">
          <a href="/blog">Home Sweet Home Blog</a>
        </li>
      </ul>
    </div>
  );
}

export default SubNav;
