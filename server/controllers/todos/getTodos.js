const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Todo = require("../../models/todoModel");

exports.getTodos = async (req, res) => {
  const userEmail = jwt.verify(
    req.headers.authorization,
    process.env.JWT_TOKEN
  );

  try {
    const todos = await Todo.find({ email: userEmail.email });

    res.json({
      status: true,
      message: "Todos of user retrieved succesfully",
      todos: todos,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Internal server error",
    });
  }
};
