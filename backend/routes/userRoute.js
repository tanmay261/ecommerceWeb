const express = require("express");
const { registerUser, loginUSer } = require("../controllers/userController");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUSer);

module.exports=router;