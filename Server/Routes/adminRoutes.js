// import express and create admin Router
const express = require("express");
const adminRouter = express.Router();
const {
  createUser,
  getTopTenUsers,
  getUsersAscendingId,
  getUsersDescendingId,
  getUsersByUsername,
} = require("../db");
// Create user route
adminRouter.post("/createUser", async (req, res) => {
  //   get username and password from request body
  const { username, password } = req.body;

  try {
    // Call the createUser function
    const isUserCreated = await createUser(username, password);
    // if user is created, return success response if not return internal server error
    if (isUserCreated) {
      res.status(200).json({ userCreated: true });
    } else {
      res
        .status(500)
        .json({ userCreated: false, message: "Internal Server Error" });
    }
  } catch (error) {
    throw error;
  }
});

// View top ten user route
adminRouter.get("/viewUsers/viewTopTen", async (req, res) => {
  try {
    const topTenUsers = await getTopTenUsers();
    // return top ten users with success
    res.status(200).json(topTenUsers);
  } catch (error) {
    console.log(error);
    // send error if something went wrong with the server
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

adminRouter.get("/viewUsers/id-ascending", async (req, res) => {
  try {
    // fetch users from databse ordered by ascending id
    const usersByAscendingID = await getUsersAscendingId();
    res.status(200).json(usersByAscendingID);
  } catch (error) {
    console.log(error);
    // send error response if something went wrong
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

adminRouter.get("/viewUsers/id-descending", async (req, res) => {
  try {
    // fetch users from databse ordered by descending id
    const usersByDescendingID = await getUsersDescendingId();
    res.status(200).json(usersByDescendingID);
  } catch (error) {
    console.log(error);
    // send error response if something went wrong
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

adminRouter.get("/viewUsers/searchUser", async (req, res) => {
  try {
    // get username from query
    const { username } = req.query;
    // fetch user data based on username provided
    const userByUsername = await getUsersByUsername(username);
    // respond with the user data
    res.status(200).json(userByUsername);
  } catch (error) {
    console.log(error);
    // respond with error if something went wrong
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Export the router
module.exports = adminRouter;
