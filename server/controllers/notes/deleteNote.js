const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Note = require("../../models/noteModel");

exports.deleteNote = async (req, res) => {
  const id = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.json({
        status: false,
        message: "No such note with this id",
      });
    } else {
      try {
        await Note.findByIdAndRemove(id);

        res.json({
          status: true,
          message: "Note deleted successfully",
        });
      } catch (err) {
        res.json({
          status: false,
          error: "Error while deleting note",
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
