const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Todo = require("../../models/todoModel");

exports.getTodo = async (req, res) => {
  const id = req.params.id;

  try {
    const todo = await Todo.findOne({ _id: id });

    res.json({
      status: true,
      message: "Todo retrieved succesfully",
      description: todo.description,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Internal server error",
    });
  }
};
