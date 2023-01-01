import "./Footer.css";
import FooterLinks from "../FooterLinks/FooterLinks";
const Footer = () => {
  return (
    <div className="bg-info bg-gradient footer">
      <h1 className="border-bottom border-2 bg-gradient">Home Sweet Home</h1>
      <FooterLinks />
    </div>
  );
};

export default Footer;
