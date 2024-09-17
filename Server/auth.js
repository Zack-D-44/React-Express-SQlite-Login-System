require("dotenv").config();
const secretKey = "fhjs9skj3l20samci_+";
// Import JWT library
const jwt = require("jsonwebtoken");

const generateJWTToken = (user) => {
  // if (!process.env.SECRET_JWT_KEY) {
  //   throw new Error("The SECRET_JWT_KEY environment variable is not set.");
  // }

  const tokenPayload = {
    id: user.id,
    username: user.username,
    role: user.role,
  };

  return jwt.sign(tokenPayload, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
};

module.exports = { generateJWTToken };
