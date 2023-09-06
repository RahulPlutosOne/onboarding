const express = require("express");
const user = require("../controllers/user");
const { authenticate } = require("../middleware/auth");

const router = express.Router();

router.post("/signup", user.userSignup);

router.post("/signin", user.userSignin);

router.post("/changeUsername", authenticate, user.changeUsername);

router.post("/changePassword", authenticate, user.changePassword);

module.exports = router;
