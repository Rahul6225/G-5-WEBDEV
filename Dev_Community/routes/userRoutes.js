const express = require("express");
const User = require("../models/user.js");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userAuth } = require("../middlewares/userAuth.js");

userRouter.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, emailId, password } = req.body;
    if (!firstName || !lastName || !emailId || !password) {
      return res.status(400).send("All fields are required.");
    }
    const existingUser = await User.findOne({ emailId });
    if (existingUser) {
      return res.status(409).send("User already exists with this email.");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: hashPassword,
    });

    await user.save();
    res.status(201).send("User added successfully.");
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).send("Internal server error: " + err.message);
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId: emailId });
    if (!emailId || !password) {
      throw new Error("Enter the credentials!!");
    }
    if (!user) {
      throw new Error("Invalid credentials ");
    }
    const ispasword = await bcrypt.compare(password, user.password);

    // res.send(user);
    if (!ispasword) {
        res.status(401).send("Invalid password");
    }
    const token = await jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });
    res.cookie("token", token);
    res.send({
      message: "Great,Login successfully to Dev-Community!!!",
      user
    });

    // res.send("Login successfully"+token);
  } catch (err) {
    res.status(400).send(err.message);
  }
});



userRouter.get("/profile",userAuth,async (req,res)=>{
  try {
      const user = req.user;
      const isUser = await user.find(user);
      if(!isUser){
        res.status(400).send("Not found");
      }

      res.send(isUser);

    
  } 
  catch (error) {
  }
});

module.exports = userRouter;
