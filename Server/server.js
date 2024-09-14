// import express
const express = require("express");
// import necessary router
const authenticateUserRouter = require("./Routes/authenticateUser");
const adminRouter = require("./Routes/adminRoutes");
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
app.use("/admin", adminRouter);
// Start server listening

app.listen(4023, () => console.log("Server started on port 4023"));
