import "./SubNav.css";
function SubNav() {
  return (
    <div className="text-dark border border-dark bg-seconary bg-gradient">
      <ul className="row me-3 mt-2 ">
        <li className="col sub-item bg-light bg-gradient">
          Find a Sweet House
        </li>
        <li className="col sub-item bg-light bg-gradient">
          Find an Sweet Agent
        </li>
        <li className="col sub-item bg-light bg-gradient">Services</li>
        <li className="col sub-item bg-light bg-gradient">
          Mortgage Calculators
        </li>
        <li className="col sub-item bg-light bg-gradient">
          Home Sweet Home Blog
        </li>
      </ul>
    </div>
  );
}

export default SubNav;
