import React from "react";
import styles from "../styles/loginForm.module.css";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
const { useNavigate } = require("react-router-dom");

export default function LoginForm({ isUserSignedIn, setCurrentUserUsername }) {
  // let userValid = false;
  // states for password and user name
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function authenticateUser(event) {
    // construct the url
    const url = "http://localhost:4023/authenticateUser/login";
    // Prevent page reload
    event.preventDefault();
    // console.log(username, password);
    try {
      // make request
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: { "Content-Type": "application/json" },
      });
      // validate response and decide where user goes from there
      if (response.ok) {
        //Going to need to change this
        const json = await response.json();

        if (json.success) {
          // if successful set user valid to true and set their username
          // set user auth token in local storage
          localStorage.setItem("authToken", json.token);

          // retrive token from local storage and decode it
          const authToken = localStorage.getItem("authToken");
          const decodedAuthToken = jwtDecode(authToken);

          // check if the role of the user is admin or user and redirect them to their respective pages
          if (decodedAuthToken.role === "admin") {
            sessionStorage.setItem("username", username);
            navigate("/admin/logged-in");
          } else navigate("/user/logged-in");
        } else {
          // if user is not valid make sure to set the state to false
          alert("Invalid username or password");
          // isUserSignedIn(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className={`${styles.centreVerticallyAndHorizontally} ${styles.font} ${styles.formContainer}`}
    >
      <h2 className={styles.headingStyle}>Login</h2>
      {/* Login user form */}
      <form action="#" onSubmit={authenticateUser}>
        <input
          type="text"
          placeholder="Username"
          className={styles.formInputs}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className={styles.formInputs}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <input type="submit" value="Login" className={styles.loginButton} />
      </form>
    </div>
  );
}
