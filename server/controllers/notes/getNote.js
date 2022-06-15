const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Note = require("../../models/noteModel");

exports.getNote = async (req, res) => {
  const id = req.params.id;

  try {
    const note = await Note.findOne({ _id: id });

    res.json({
      status: true,
      message: "Notes of user retrieved succesfully",
      title: note.title,
      description: note.description,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Internal server error",
    });
  }
};
