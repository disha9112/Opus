const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/userModel");

exports.getUser = async (req, res) => {
  const email = req.email;

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    return res.json({
      status: true,
      message: "Validation successful",
      name: userExists.name,
    });
  } else {
    return res.json({
      status: false,
      message: "Database error",
      userExists: userExists,
    });
  }
};
