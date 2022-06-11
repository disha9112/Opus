const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../../models/userModel");

exports.signup = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  try {
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      res.json({
        status: false,
        message: "Email already exists in the database",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      {
        name: name,
        email: email,
      },
      process.env.JWT_TOKEN
    );

    res.json({
      status: true,
      message: "User successfully signed in",
      token: token,
    });
  } catch (err) {
    res.json({
      status: false,
      error: "Internal server error",
    });
  }
};
