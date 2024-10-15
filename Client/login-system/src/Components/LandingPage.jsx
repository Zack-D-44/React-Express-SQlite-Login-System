import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../styles/loginForm.module.css";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Login System</h1>

      <button onClick={() => navigate("/login")} className={style.loginButton}>
        Login
      </button>
    </div>
  );
}
