const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const {ConnectDB} = require('./db.js');
const User = require("./models/user.js");
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4500;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/Dev_Community";
const DATABASE_NAME = process.env.DATABASE_NAME || "Dev_Community"; 


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
