const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Event = require("../../models/eventModel");

exports.getEvents = async (req, res) => {
  const userEmail = jwt.verify(
    req.headers.authorization,
    process.env.JWT_TOKEN
  );

  try {
    const events = await Event.find({ email: userEmail.email });

    res.json({
      status: true,
      message: "Events of user retrieved succesfully",
      events: events,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Internal server error",
    });
  }
};
