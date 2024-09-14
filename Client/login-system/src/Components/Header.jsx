import React from "react";
import styles from "../styles/header.module.css";
import globalStyles from "../styles/globalStyles.module.css";
const { useNavigate, useLocation } = require("react-router-dom");

export default function Header() {
  // create navigate hook
  const navigate = useNavigate();
  const location = useLocation();

  //   retrive state from the location
  //   const { username } = location.state || "";
  //   retrive state from the location
  const { username } = location.state || "";
  return (
    <div>
      <header className={styles.header}>
        <h1>Login System</h1>
        <h1 className={styles.greetingHeading}>Hello {username}</h1>
        <button className={globalStyles.button} onClick={() => navigate("/")}>
          &#8592; Back
        </button>
      </header>
    </div>
  );
}
