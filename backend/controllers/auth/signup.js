const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../../models/userModel");

exports.signup = async (req, res) => {
  //Extract data from request body
  const name = req.body.name;
  const password = req.body.password;
  const phoneNumber = req.body.phoneNumber;
  const email = req.body.email;

  const nameRegex = /^[a-zA-Z\-]+$/;
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  //Check if fields are not empty
  if (!name || !password || !phoneNumber || !email) {
    return res.status(400).send({
      status: false,
      message: "Fields cannot be empty",
    });
  }

  //Check if the email already exists
  const emailExists = await User.exists({ email: email });
  if (emailExists) {
    return res.status(400).send({
      status: false,
      message: "This user already exists",
    });
  }

  if (!nameRegex.test(name)) {
    return res.status(400).send({
      status: false,
      message: "Please provide the name in correct format",
    });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).send({
      status: false,
      message: "Please provide the email in correct format",
    });
  }

  //Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  //Add into Database
  const newUser = await User.create({
    name: name,
    password: hashedPassword,
    phoneNumber: phoneNumber,
    email: email,
  });

  //Generate JWT token
  const token = jwt.sign({ email: newUser.email }, process.env.JWT_TOKEN);

  //Send the response
  return res.status(200).send({
    status: true,
    message: "User signed up successfully",
    token: token,
    user: newUser,
  });
};
