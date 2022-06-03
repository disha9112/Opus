const express = require("express");
const router = express.Router();

const { signup } = require("../controllers/auth/signup");
const { login } = require("../controllers/auth/login");
const isValidated = require("../middlewares/validated");

router.post("/signup", signup);
router.post("/login", isValidated, login);

module.exports = router;
