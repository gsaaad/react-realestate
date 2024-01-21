import React, { useState } from "react";
import photo_3 from "../../assets/img/photo_3.jpeg";

import "./Login.css";
//!when user logs in, access route to logging in
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    var userEmail = formState.email;
    var userPass = formState.password;

    try {
      const response = await fetch("URL_TO_YOUR_LOGIN_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail, password: userPass }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        // Redirect user or update UI
      } else {
        // Handle login failure
        console.log("Login failed");
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  //   var userEmail = formState.email;
  //   var userPass = formState.password;
  //   console.log("Submit button clicked", userEmail, userPass);
  //   var storedUser = JSON.parse(localStorage.getItem("LoggedInUser"));
  //   if (storedUser.email === userEmail && storedUser.password === userPass) {
  //     window.location.assign("/");
  //   }
  // };
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
