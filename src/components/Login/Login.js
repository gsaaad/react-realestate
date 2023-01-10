import photo_3 from "../../assets/img/photo_3.jpeg";
import photo_4 from "../../assets/img/photo_4.jpeg";

import "./Login.css";
const Login = () => {
  return (
    <div className="rounded border-end border-start border-light">
      <h1 className="bg-light pt-4 text-dark fw-semibold ">Sign In</h1>
      <div
        style={{
          backgroundImage: `url(${photo_3})`,
          fontSize: "20px",
          padding: "20px",
          backgroundSize: "100% 100%",
          height: "65vh",
          opacity: "0.2",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className=" text-light">
        <div>
          <h3 className="login-header">Sign in for Sweet Home</h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
