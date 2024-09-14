import React from "react";
const { useNavigate, useLocation } = require("react-router-dom");

export default function Header() {
  // create navigate hook
  const navigate = useNavigate();
  const location = useLocation();

  //   retrive state from the location
  const { username } = location.state || "";
  return (
    <div>
      <header>
        <h1>Login System</h1>
        <button onClick={() => navigate("/")}>Back</button>
      </header>
      <h1>Hello {username}</h1>
    </div>
  );
}
