require("dotenv").config();
// Import JWT library
const jwt = require("jsonwebtoken");

const generateJWTToken = (user) => {
  if (!process.env.SECRET_JWT_KEY) {
    throw new Error("JWT_KEY environment variable is not set.");
  }

  const tokenPayload = {
    id: user.id,
    username: user.username,
    role: user.role,
  };

  return jwt.sign(tokenPayload, process.env.JWT_KEY, {
    expiresIn: "1h",
  });
};

module.exports = { generateJWTToken };
