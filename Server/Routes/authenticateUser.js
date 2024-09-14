const express = require("express");
const authenticateUser = require("../db");
const authenticateUserRouter = express.Router();
const cors = require("cors");
const app = express();

// define cors option
// const corsOption = {
//   origin: "*",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   preflightContinue: false,
//   optionsSuccessStatus: 204,
// };

app.use(cors({ origin: true, credentials: true }));
// In this request, username and password are sent in the body
authenticateUserRouter.post("/", async (req, res) => {
  try {
    // Get sent username and password from body
    // const { username, password } = req.body;
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body);
    // Ensure that authenticateUser is not redefined
    const isAuthenticated = await authenticateUser(username, password); // Assume authenticateUser is async

    if (isAuthenticated) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = authenticateUserRouter;
