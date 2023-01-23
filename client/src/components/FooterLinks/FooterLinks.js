import "./FooterLinks.css";

const FooterLinks = () => {
  return (
    <div className="container footer-container ">
      <ul className="row ">
        <li className="col">
          <a href="/sweethomes">Find a Sweet Home</a>
        </li>
        <li className="col">
          <a href="/locations">Office Locations</a>
        </li>
        <li className="col">
          <a href="/ethicscode">Code Of Ethics</a>
        </li>
      </ul>
      <ul className="row">
        <li className="col">
          <a href="/sweetagent">Find a Sweet Agent</a>
        </li>
        <li className="col">
          <a href="/blog">Blog</a>
        </li>
        <li className="col">
          <a href="/policy">Privacy Policy</a>
        </li>
      </ul>
      <ul className="row">
        <li className="col">
          <a href="/about">About Home Sweet Home</a>
        </li>
        <li className="col">
          <a href="/news">News</a>
        </li>
        <li className="col">
          <a href="/terms">Terms Of Use</a>
        </li>
      </ul>
      <ul className="row">
        <li className="col">
          <a href="/services">Services</a>
        </li>
        <li className="col">
          <a href="/frequently-asked-questions">FAQ</a>
        </li>
        <li className="col">
          <a href="/warranty">Sweet Home Warranty &copy;</a>
        </li>
      </ul>
    </div>
  );
};
export default FooterLinks;
