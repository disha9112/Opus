const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Todo = require("../../models/todoModel");

exports.createTodo = async (req, res) => {
  const userEmail = jwt.verify(
    req.headers.authorization,
    process.env.JWT_TOKEN
  );

  const email = userEmail.email;
  const description = req.body.description;

  try {
    const newTodo = new Todo({ email, title, description });

    try {
      await newTodo.save();

      res.json({
        status: true,
        message: "Todo created successfully",
      });
    } catch (err) {
      res.json({
        status: false,
        error: "Error while creating todo",
      });
    }
  } catch (err) {
    res.json({
      status: false,
      error: "Internal server error",
    });
  }
};
