const express = require("express");
const User = require("../../models/userModel");

exports.login = async (req, res) => {
  const password = req.body.password;
  const email = req.body.email;

  if (!password || !email) {
    return res.status(400).send({
      status: false,
      message: "Fields cannot be empty",
    });
  }

  const userEmailExists = await User.exists({ email: email });

  if (!userEmailExists) {
    return res.status(400).send({
      status: false,
      message: "This email does not exist in the database",
    });
  }

  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!emailRegex.test(email)) {
    return res.status(400).send({
      status: false,
      message: "Please provide the email in correct format",
    });
  }

  return res.status(200).send({
    status: true,
    message: "User logged in",
  });
};
