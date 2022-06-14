const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Todo = require("../../models/todoModel");

exports.deleteTodo = async (req, res) => {
  const id = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.json({
        status: false,
        message: "No such note with this id",
      });
    } else {
      try {
        await Todo.findByIdAndRemove(id);

        res.json({
          status: true,
          message: "Todo deleted successfully",
        });
      } catch (err) {
        res.json({
          status: false,
          error: "Error while deleting todo",
        });
      }
    }
  } catch (err) {
    res.json({
      status: false,
      error: "Internal server error",
    });
  }
};
