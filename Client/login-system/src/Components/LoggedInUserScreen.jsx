import React from "react";
import Header from "./Header";
// const { useNavigate, useLocation } = require("react-router-dom");
export default function LoggedInUserScreen() {
  // create navigate hook

  return (
    <div>
      <Header />

      <form action="#" id="createUserForm">
        <input type="text" placeholder="Username" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <input type="submit" value="Create User" />
      </form>
    </div>
  );
}
