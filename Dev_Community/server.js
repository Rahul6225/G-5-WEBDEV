const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { ConnectDB } = require("./db.js");
const User = require("./models/user.js");
const userRoutes = require("./routes/userRoutes");
const userAuth = require("./middlewares/userAuth.js");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4500;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/Dev_Community";
const DATABASE_NAME = process.env.DATABASE_NAME || "Dev_Community";

app.post("/signup", async (req, res) => {

  try {
    const { firstName, lastName, emailId, password } = req.body;
    const user = new User({
      firstName:"Rahul",
      lastName:"Singh",
      emailId:"rahulorstan@gmail.com",
      password:"Rahulsingh@123",
    });
    await user.save();
    res.send("User added succefully");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

app.post("/login", async(req, res) => {
  try {
    const {emailId,password} = req.body;

    if(!password){
      const token = await jwt.sign({ _id: user._id }, "redmi@6225", {
        expiresIn: "7d",
      });
    }
    res.send("Login successfully");
  } catch (err) {
    res.status(400).send("err.message");
  }
});
app.post("/all-products", userAuth, (req, res) => {
  try {
    res.send("All products shown below");
  } catch (err) {
    res.status(400).send("err.message");
  }
});

ConnectDB()
  .then(() => {
    console.log(`DataBase connected Succesfully:${DATABASE_NAME}`);
    app.listen(PORT, () => {
      console.log("Server is Running");
    });
  })
  .catch((err) => {
    console.log("Database failed to connect");
  });
