// import express
const express = require("express");
// import authenticateUserRouter from db
const authenticateUserRouter = require("./Routes/authenticateUser");

// create express app
const app = express();

// Import CORS
const cors = require("cors");

app.use(express.json());

app.use(
  cors({
    // can use origin true to allow all domains
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: false,
    // credentials specifies whether cookies are allowed in the response
  })
);

app.use("/authenticateUser", authenticateUserRouter);

// Start server listening

app.listen(4023, () => console.log("Server started on port 4023"));
