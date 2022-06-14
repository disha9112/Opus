const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Note = require("../../models/noteModel");

exports.updateNote = async (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const description = req.body.description;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.json({
        status: false,
        message: "No such note with this id",
      });
    } else {
      try {
        const updatedNote = { _id: id, title: title, description: description };

        await Note.findByIdAndUpdate(id, updatedNote, { new: true });

        res.json({
          status: true,
          message: "Note updated successfully",
        });
      } catch (err) {
        res.json({
          status: false,
          error: "Error while updating note",
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
