const express = require("express");
const route = express.Router();



route.get("/user/home",userController.home)
route.get("/user/payment",userController.payment)



module.exports = route;