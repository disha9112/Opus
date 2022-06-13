const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Note = require("../../models/noteModel");

exports.getNotes = async (req, res) => {
  const userEmail = jwt.verify(
    req.headers.authorization,
    process.env.JWT_TOKEN
  );

  try {
    const notes = await Note.find({ email: userEmail.email });

    res.json({
      status: true,
      message: "Notes of user retrieved succesfully",
      notes: notes,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Internal server error",
    });
  }
};
