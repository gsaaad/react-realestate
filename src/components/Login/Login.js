import photo_3 from "../../assets/img/photo_3.jpeg";
import photo_4 from "../../assets/img/photo_4.jpeg";

import "./Login.css";
const Login = () => {
  return (
    <div className="rounded border-end border-start border-light login-container">
      <h1 className="bg-light pt-4 text-dark fw-semibold ">Sign In</h1>
      <div
        style={{
          backgroundImage: `url(${photo_3})`,

          padding: "20px",
          backgroundSize: "100% 100%",
          height: "65vh",
          opacity: "0.2",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className=" text-light">
        <div className="login-modal-container">
          <h3 className="login-header">Sign in for Sweet Home</h3>
          <form className="login-form">
            <input
              className="form-input"
              placeholder="Email"
              name="email"
              type="email"
              id="user-email"
            />
            <input
              className="form-input"
              placeholder="********"
              name="password"
              type="password"
              id="user-password"
            />
            <button className="bg-primary rounded p-2" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
