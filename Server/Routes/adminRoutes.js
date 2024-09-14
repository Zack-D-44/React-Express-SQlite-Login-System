// import express and create admin Router
const express = require("express");
const adminRouter = express.Router();

const { createUser } = require("../db");

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

// Export the router
module.exports = adminRouter;
