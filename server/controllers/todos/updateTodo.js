const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Todo = require("../../models/todoModel");

exports.updateNote = async (req, res) => {
  const id = req.params.id;
  const description = req.body.description;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.json({
        status: false,
        message: "No such todo with this id",
      });
    } else {
      try {
        const updatedTodo = { _id: id, description: description };

        await Todo.findByIdAndUpdate(id, updatedTodo, { new: true });

        res.json({
          status: true,
          message: "Todo updated successfully",
        });
      } catch (err) {
        res.json({
          status: false,
          error: "Error while updating todo",
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
