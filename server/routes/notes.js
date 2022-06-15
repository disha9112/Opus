const express = require("express");
const router = express.Router();

const { createNote } = require("../controllers/notes/createNote");
const { deleteNote } = require("../controllers/notes/deleteNote");
const { getNote } = require("../controllers/notes/getNote");
const { getNotes } = require("../controllers/notes/getNotes");
const { updateNote } = require("../controllers/notes/updateNote");

router.post("/createNote", createNote);
router.delete("/deleteNote/:id", deleteNote);
router.get("/getNotes", getNotes);
router.get("/getNote/:id", getNote);
router.put("/updateNote/:id", updateNote);

module.exports = router;
