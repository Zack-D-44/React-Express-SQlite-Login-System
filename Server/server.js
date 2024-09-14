// import express
const express = require("express");
// import authenticateUserRouter from db
const authenticateUserRouter = require("./Routes/authenticateUser");

// create express app
const app = express();

app.use(express.json());

app.use("/authenticateUser", authenticateUserRouter);

// Start server listening

app.listen(4023, () => console.log("Server started on port 4023"));
