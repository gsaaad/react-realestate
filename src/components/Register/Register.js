import React, { useState } from "react";
import photo_4 from "../../assets/img/photo_4.jpeg";

import "./Register.css";
const Register = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
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
      <h1 className="bg-light pt-4 text-dark fw-semibold">Register</h1>
      <div
        style={{
          backgroundImage: `url(${photo_4})`,
          padding: "20px",
          backgroundSize: "100% 100%",
          height: "65vh",
          opacity: "0.2",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className=" text-light">
        <div className="login-modal-container">
          <h3 className="login-header">Register for Sweet Home</h3>
          <form className="login-form" onSubmit={handleFormSubmit}>
            <label htmlFor="user-firstname">First Name</label>

            <input
              className="form-input"
              name="firstName"
              placeholder="First Name"
              type="text"
              id="user-firstname"
              onChange={handleChange}
            />
            <label htmlFor="user-lastname">Last Name</label>

            <input
              className="form-input"
              name="lastName"
              placeholder="Last Name"
              type="text"
              id="user-lastname"
              onChange={handleChange}
            />
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
            <label htmlFor="user-repassword">Re-enter Password</label>
            <input
              className="form-input"
              placeholder="********"
              name="confirmPassword"
              type="password"
              id="user-confirmPassword"
              onChange={handleChange}
            />
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

export default Register;
