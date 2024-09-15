import React from "react";
import styles from "../styles/header.module.css";
import globalStyles from "../styles/globalStyles.module.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const username = sessionStorage.getItem("username") || "";
  return (
    <header className={styles.header}>
      <h1>Login System</h1>
      <div className={styles.rightSection}>
        <p className={styles.greetingHeading}>Hello {username}</p>
        <button className={globalStyles.button} onClick={() => navigate("/")}>
          &#8592; Back
        </button>
      </div>
    </header>
  );
}
