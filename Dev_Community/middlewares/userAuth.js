const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const userAuth = async (req, res, next) => {
  try {
    const token = req.cookies;
    if (!token) {
      throw new Error("Token is invalid");
    }
    const { _id } = jwt.verify(token, "Redmi@6225");
    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found");
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("Error Message" + err.message);
  }
};
