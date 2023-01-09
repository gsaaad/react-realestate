import "./Login.css";
import photo_4 from "../../assets/img/photo_4.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMailBulk,
  faAppleWhole,
  faMailForward,
} from "@fortawesome/free-solid-svg-icons";
const Login = () => {
  return (
    <div className="rounded border-end border-start border-light signin-container">
      <h1 className="bg-light pt-4 text-dark fw-semibold ">Sign In</h1>
      <div
        style={{
          backgroundImage: `url(${photo_4})`,
          fontSize: "20px",
          padding: "20px",
          backgroundSize: "100% 100%",
          height: "65vh",
          opacity: "0.2",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="signin-modal-container text-light">
        <div className="signin-header">
          <p>Welcome to Home Sweet Home</p>
          <div>
            <p>USA & CAN's Leading Real Estate Afforadble Sweet Homes</p>
            <p>
              Choose an option to sign in or create your SweetHome.com account.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="col signin-btns-container">
            <div className="row">
              <button className="col signin-btn">
                <FontAwesomeIcon icon={faMailBulk} />
                Sign in with Google
              </button>

              <button className="col signin-btn">
                <FontAwesomeIcon icon={faAppleWhole} />
                Sign in with Apple
              </button>
            </div>
            <div className="row">
              <button className="col signin-btn">
                <FontAwesomeIcon icon={faMailForward} />
                Sign in with Email
              </button>
              <button className="col register-btn">Create an Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
