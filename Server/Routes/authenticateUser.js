const express = require("express");

const authenticateUserRouter = express.Router;

//In this request they will have sent username and password in body
authenticateUserRouter.get("/", (req, res) => {});

export default authenticateUserRouter;
