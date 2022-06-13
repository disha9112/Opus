const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Note = require("../../models/noteModel");

exports.createNote = async (req, res) => {
  const userEmail = jwt.verify(
    req.headers.authorization,
    process.env.JWT_TOKEN
  );

  const email = userEmail.email;
  const title = req.body.title;
  const description = req.body.description;

  try {
    const newNote = new Note({ email, title, description });

    try {
      await newNote.save();

      res.json({
        status: true,
        message: "Note created successfully",
      });
    } catch (err) {
      res.json({
        status: false,
        error: "Error while creating note",
      });
    }
  } catch (err) {
    res.json({
      status: false,
      error: "Internal server error",
    });
  }
};
