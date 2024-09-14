import React from "react";
import Header from "./Header";
const { useNavigate, useLocation } = require("react-router-dom");
export default function LoggedInUserScreen() {
  // create navigate hook

  const location = useLocation();

  //   retrive state from the location
  const { username } = location.state || "";

  return (
    <div>
      <Header />
      <h1>Hello {username}</h1>

      <form action="#" id="createUserForm">
        <input type="text" placeholder="Username" />
        <br />
        <input type="password" placeholder="Password" />
      </form>
    </div>
  );
}
