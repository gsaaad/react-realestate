import "./FooterLinks.css";

const FooterLinks = () => {
  return (
    <div className="container footer-qlinks ">
      <ul className="row ">
        <li className="col">
          <a href="/">Find a Sweet Home</a>
        </li>
        <li className="col">
          <a href="/">Office Locations</a>
        </li>
        <li className="col">
          <a href="/">Code Of Ethics</a>
        </li>
      </ul>
      <ul className="row">
        <li className="col">
          <a href="/">Find a Sweet Agent</a>
        </li>
        <li className="col">
          <a href="/">Blog</a>
        </li>
        <li className="col">
          <a href="/">Privacy Policy</a>
        </li>
      </ul>
      <ul className="row">
        <li className="col">
          <a href="/">About Home Sweet Home</a>
        </li>
        <li className="col">
          <a href="/">News</a>
        </li>
        <li className="col">
          <a href="/">Terms Of Use</a>
        </li>
      </ul>
      <ul className="row">
        <li className="col">
          <a href="/">Services</a>
        </li>
        <li className="col">
          <a href="/">FAQ</a>
        </li>
        <li className="col">
          <a href="/">Sweet Home Warranty &copy;</a>
        </li>
      </ul>
    </div>
  );
};
export default FooterLinks;
