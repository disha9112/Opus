const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/notes/createTodo");
const { deleteTodo } = require("../controllers/notes/deleteTodo");
const { getTodos } = require("../controllers/notes/getNotes");
const { updateTodo } = require("../controllers/notes/updateTodo");

router.post("/createTodo", createTodo);
router.delete("/deleteNote/:id", deleteTodo);
router.get("/getTodos", getTodos);
router.post("/updateNote/:id", updateTodo);

module.exports = router;
