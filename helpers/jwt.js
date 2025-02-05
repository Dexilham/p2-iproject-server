const jwt = require("jsonwebtoken");
// const SECRET = process.env.JWT_SECRET;
const SECRET = process.env.JWT_SECRET;

function createToken(payload) {
  return jwt.sign(payload, SECRET);
}

function verifyToken(token) {
  return jwt.verify(token, SECRET);
}

module.exports = { createToken, verifyToken };
