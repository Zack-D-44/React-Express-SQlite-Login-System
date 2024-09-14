import React from "react";
import Header from "./Header";
import style from "../styles/createUser.module.css";
import globalStyles from "../styles/globalStyles.module.css";
const { useState } = require("react");

export default function LoggedInUserScreen() {
  // create states for the username and password
  const [newUsersUsername, setNewUsersUsername] = useState("");
  const [newUsersPasword, setNewUsersPassword] = useState("");
  // Client side validation for the username and password

  const validateNewUserDetails = () => {
    let message = "";
    // if username or password empty or less than 3 characters, return true so that user can't be created
    if (newUsersUsername === "" || newUsersPasword === "") {
      message = "Username and password cannot be empty";
    } else if (newUsersUsername.length < 3 || newUsersPasword.length < 3) {
      if (message) {
        message +=
          "and Username and password must be at least 3 characters long";
      } else {
        message = "Username and password must be at least 3 characters long";
      }
    }

    if (message) {
      alert(message);
      return true;
    } else {
      return false;
    }
  };

  const createUser = async (event) => {
    // event.preventDefault();
    // if errors in validation, don't create user

    const isUserValid = validateNewUserDetails(
      newUsersUsername,
      newUsersPasword
    );
    if (isUserValid) {
      return;
    } else {
      // create user with create user function
      const url = "http://localhost:4023/admin/createUser";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: newUsersUsername,
          password: newUsersPasword,
        }),
      });

      const userCreated = await response.json();
      console.log(userCreated);

      if (userCreated.userCreated) {
        alert(`User ${newUsersUsername} created successfully`);
      } else {
        alert(
          `For some reason the user ${newUsersUsername} could not be created.`
        );
      }
    }
  };
  return (
    <div>
      <Header />

      <form
        action="#"
        id="createUserForm"
        className={`${style.createUserForm} ${globalStyles.centreHorizontallyVertically}`}
        onSubmit={(event) => createUser(event)}
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
          value={newUsersUsername}
          onChange={(e) => setNewUsersUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className={`${globalStyles.formInputs} ${globalStyles.centreHorizontally}`}
          value={newUsersPasword}
          onChange={(e) => {
            setNewUsersPassword(e.target.value);
          }}
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
