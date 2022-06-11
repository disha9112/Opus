const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/userModel");

exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const userExists = await User.exists({ email: email });

  if (!userExists) {
    return res.status(400).send({
      status: false,
      message: "This email does not exist in the database",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, userExists.password);

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: userExists.name,
        email: userExists.email,
      },
      process.env.JWT_TOKEN
    );

    return res.status(200).send({
      status: true,
      userExists: token,
    });
  } else {
    return res.status(400).send({
      status: false,
      message: "Validation error",
    });
  }
};
