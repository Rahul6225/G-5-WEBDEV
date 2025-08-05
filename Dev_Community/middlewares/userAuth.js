const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new Error("Token is invalid");
    }
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    const { _id } = decode;
    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("Error Message:" + err.message);
  }
};

module.exports = { userAuth };
