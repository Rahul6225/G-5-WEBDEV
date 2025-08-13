const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const userAuth = async (req, res, next) => {
  try {
    const { Authorization } = req.headers;

    const token = Authorization.split(" ")[1];
    // const { token } = req.cookies;
    // if (!token) {
    //   throw new Error("Token is invalid");
    // }
    const obj = jwt.verify(token, process.env.SECRET_KEY);
    const { _id } = obj;
    const user = await User.findById(_id);
    if (!user) {
      return res.status(400).send("User not found");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("Error Message:" + err.message);
  }
};

module.exports = { userAuth };
