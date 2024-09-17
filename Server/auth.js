// require("dotenv").config();
// Import JWT library
const jwt = require("jsonwebtoken");

const generateJWTToken = (user) => {
  // if (!process.env.SECRET_JWT_KEY) {
  //   throw new Error("The SECRET_JWT_KEY environment variable is not set.");
  // }

  // construct the tokens payload
  const tokenPayload = {
    id: user.id,
    username: user.username,
    role: user.role,
  };

  // Return created token to the user
  return jwt.sign(tokenPayload, `${process.env.SECRET_KEY}`, {
    expiresIn: "1h",
  });
};

const verifyAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  // Verify the token
  jwt.verify(token, `${process.env.SECRET_KEY}`, (err, decoded) => {
    if (err) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    if (decoded.role !== "admin") {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    // if user is admin

    next();
  });
};

module.exports = { generateJWTToken, verifyAdmin };
