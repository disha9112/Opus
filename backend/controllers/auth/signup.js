const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../../models/userModel");

exports.signup = async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const phoneNumber = req.body.phoneNumber;
  const email = req.body.email;

  try {
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      res.status(400).send({
        status: false,
        message: "Email already exists in the database",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name: name,
      email: email,
      password: hashedPassword,
      phoneNumber: phoneNumber,
    });

    const token = jwt.sign(
      {
        name: userExists.name,
        email: userExists.email,
      },
      process.env.JWT_TOKEN
    );

    res.status(200).send({
      status: true,
      message: "User successfully signed in",
      token: token,
    });
  } catch (err) {
    res.status(500).send({
      status: false,
      error: "Internal server error",
    });
  }
};
