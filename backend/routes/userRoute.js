const express = require("express");
const { registerUser, loginUSer, logout } = require("../controllers/userController");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUSer);
router.route("/logout").post(logout);
module.exports=router;