const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Event = require("../../models/eventModel");

exports.createEvent = async (req, res) => {
  const userEmail = jwt.verify(
    req.headers.authorization,
    process.env.JWT_TOKEN
  );

  const email = userEmail.email;
  const title = req.body.title;
  const start = req.body.start;
  const end = req.body.end;

  try {
    const newEvent = new Event({ email, title, start, end });

    try {
      await newEvent.save();

      res.json({
        status: true,
        message: "Event created successfully",
      });
    } catch (err) {
      res.json({
        status: false,
        error: "Error while creating event",
      });
    }
  } catch (err) {
    res.json({
      status: false,
      error: "Internal server error",
    });
  }
};
