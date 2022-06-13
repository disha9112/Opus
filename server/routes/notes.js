const express = require("express");
const router = express.Router();

const { createNote } = require("../controllers/notes/createNote");
// const { deleteNote } = require("../controllers/notes/deleteNote");
const { getNotes } = require("../controllers/notes/getNotes");
// const { updateNote } = require("../controllers/notes/updateNote");

router.post("/createNote", createNote);
// router.post("/delete", deleteNote);
router.get("/getNotes", getNotes);
// router.post("/update", updateNote);

module.exports = router;
