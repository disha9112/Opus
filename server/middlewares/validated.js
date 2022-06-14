const { express } = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const validated = async (req, res, next) => {
  const verifiedToken = await jwt.verify(
    req.headers.authorization,
    process.env.JWT_TOKEN
  );

  if (!verifiedToken) {
    return res.status(400).send({
      status: false,
      message: "Invalid token",
    });
  }

  const userExists = await User.findOne({ email: verifiedToken.email });
  {
    if (!userExists) {
      return res.status(400).send({
        status: false,
        message: "User does not exist in database",
      });
    } else {
      (req.email = userExists.email), (req.name = userExists.name);
      next();
    }
  }
};

module.exports = validated;
