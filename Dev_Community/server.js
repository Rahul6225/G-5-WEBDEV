const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");


const { ConnectDB } = require("./config/db.js");
const userRouter = require("./routes/userRoutes.js");
const { userAuth } = require("./middlewares/userAuth.js");


dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 4500;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/Dev_Community";
const DATABASE_NAME = process.env.DATABASE_NAME || "Dev_Community";

app.use("/",userRouter);

app.get("/", (req, res) => {
  res.send("HOMEPAGE");
});

app.get("/all-products", userAuth,(req, res) => {
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
