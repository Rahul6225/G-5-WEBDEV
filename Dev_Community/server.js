const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { ConnectDB } = require("./db.js");
const User = require("./models/user.js");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { userAuth } = require("./middlewares/userAuth.js");

// const userRoutes = require("./routes/userRoutes");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 4500;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/Dev_Community";
const DATABASE_NAME = process.env.DATABASE_NAME || "Dev_Community";

app.get("/", (req, res) => {
  res.send("HOMEPAGE");
});

app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, emailId, password } = req.body;
    if (!firstName || !lastName || !emailId || !password) {
      return res.status(400).send("All fields are required.");
    }
    const existingUser = await User.findOne({ emailId });
    if (existingUser) {
      return res.status(409).send("User already exists with this email.");
    }
    const user = new User({
      firstName,
      lastName,
      emailId,
      password,
    });

    await user.save();
    res.status(201).send("User added successfully.");
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).send("Internal server error: " + err.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId: emailId, password: password });
    if (!emailId || !password) {
      throw new Error("Enter the credentials!!");
    }
    if (!user) {
      throw new Error("Invalid credentials ");
    }
    // res.send(user);

    const token = await jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });
    res.cookie("token", token);
    res.send("Great,Login successfully to Dev-Community!!!");

    // res.send("Login successfully"+token);
  } catch (err) {
    res.status(400).send(err.message);
  }
});
app.get("/all-products", (req, res) => {
  try {
    const user = req.user;
    if (!user) {
     return res.send("It is protected Route");
    }
    res.send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

ConnectDB()
  .then(() => {
    console.log(`DataBase connected Succesfully:${DATABASE_NAME}`);
    app.listen(PORT, () => {
      console.log(`Server is Running on PORT:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Database failed to connect");
  });
