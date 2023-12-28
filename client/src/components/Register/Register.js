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
    localStorage.setItem("LoggedInUser", JSON.stringify(formState));
  };
  return (
    <div>
      <h1 className="bg-light pt-2 text-dark fw-semibold">Register</h1>
      <div style={{ height: "65vh" }}>
        <div className="register-modal-container">
          <form className="login-form" onSubmit={handleFormSubmit}>
            <label htmlFor="user-firstname" className="form-label">
              First Name
            </label>

            <input
              className="form-input"
              name="firstName"
              placeholder="First Name"
              type="text"
              id="user-firstname"
              onChange={handleChange}
            />
            <label htmlFor="user-lastname" className="form-label">
              Last Name
            </label>

            <input
              className="form-input"
              name="lastName"
              placeholder="Last Name"
              type="text"
              id="user-lastname"
              onChange={handleChange}
            />
            <label htmlFor="user-email" className="form-label">
              Email
            </label>

            <input
              className="form-input"
              placeholder="Email"
              name="email"
              type="email"
              id="user-email"
              onChange={handleChange}
            />
            <label htmlFor="user-password" className="form-label">
              Password
            </label>
            <input
              className="form-input"
              placeholder="********"
              name="password"
              type="password"
              id="user-password"
              onChange={handleChange}
            />
            <label htmlFor="user-repassword" className="form-label">
              Re-enter Password
            </label>
            <input
              className="form-input"
              placeholder="********"
              name="confirmPassword"
              type="password"
              id="user-confirmPassword"
              onChange={handleChange}
            />
            <button
              className="bg-primary rounded p-2 text-light fw-semibold m-4"
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
