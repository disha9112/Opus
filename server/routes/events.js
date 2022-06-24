const express = require("express");
const router = express.Router();

const { createEvent } = require("../controllers/events/createEvent");
const { getEvents } = require("../controllers/events/getEvents");

router.post("/createEvent", createEvent);
router.get("/getEvents", getEvents);

module.exports = router;
