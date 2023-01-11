import React, { useState } from "react";
import photo_3 from "../../assets/img/photo_3.jpeg";

import "./Login.css";
const Login = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(formState);
  };
  return (
    <div className="rounded border-end border-start border-light login-container">
      <h1 className="bg-light pt-4 text-dark fw-semibold">Sign In</h1>
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
          <form className="login-form" onSubmit={handleFormSubmit}>
            {/* <label htmlFor="user-firstname">First Name</label>

            <input
              className="form-input"
              placeholder="First Name"
              type="text"
              id="user-firstname"
            />
            <label htmlFor="user-lastname">Last Name</label>

            <input
              className="form-input"
              placeholder="Last Name"
              type="text"
              id="user-lastname"
            /> */}
            <label htmlFor="user-email">Email</label>

            <input
              className="form-input"
              placeholder="Email"
              name="email"
              type="email"
              id="user-email"
              onChange={handleChange}
            />
            <label htmlFor="user-password">Password</label>
            <input
              className="form-input"
              placeholder="********"
              name="password"
              type="password"
              id="user-password"
              onChange={handleChange}
            />
            {/* <label htmlFor="user-repassword">Re-enter Password</label>
            <input
              className="form-input"
              placeholder="********"
              name="password"
              type="password"
              id="user-repassword"
            /> */}
            <button
              className="bg-primary rounded p-2 text-light fw-semibold m-2"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
