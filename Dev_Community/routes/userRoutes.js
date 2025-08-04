const userController = require('../controllers/userController.js');

const express = require('express');
const Router = express.Router();

Router.post("/register",userController);
