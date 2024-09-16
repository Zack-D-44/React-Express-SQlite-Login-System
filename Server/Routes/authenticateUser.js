const express = require("express");
const { authenticateUserIsInDatabase } = require("../db");
const { generateJWTToken } = require("../auth");
const authenticateUserRouter = express.Router();

// In this request, username and password are sent in the body
authenticateUserRouter.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Ensure that authenticateUser is not redefined
    const isAuthenticatedInDatabase = await authenticateUserIsInDatabase(
      username,
      password
    ); // Assume authenticateUser is async
    // console.log(isAuthenticated);
    if (isAuthenticatedInDatabase) {
      const token = generateJWTToken(isAuthenticatedInDatabase);

      res.status(200).json({ token });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = authenticateUserRouter;
