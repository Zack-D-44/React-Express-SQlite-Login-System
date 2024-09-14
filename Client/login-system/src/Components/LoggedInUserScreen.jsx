import React from "react";
import Header from "./Header";
import style from "../styles/createUser.module.css";
import globalStyles from "../styles/globalStyles.module.css";
// const { useNavigate, useLocation } = require("react-router-dom");
export default function LoggedInUserScreen() {
  // create navigate hook

  return (
    <div>
      <Header />

      <form
        action="#"
        id="createUserForm"
        className={`${style.createUserForm} ${globalStyles.centreHorizontallyVertically}`}
      >
        <h1
          className={`${globalStyles.centreHorizontally} ${style.createUserHeading}`}
        >
          Create New User
        </h1>
        <input
          type="text"
          placeholder="Username"
          className={`${globalStyles.formInputs} ${globalStyles.centreHorizontally}`}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className={`${globalStyles.formInputs} ${globalStyles.centreHorizontally}`}
        />
        <br />
        <input
          type="submit"
          value="Create User"
          className={`${globalStyles.button} ${globalStyles.centreHorizontally}`}
        />
      </form>
    </div>
  );
}
