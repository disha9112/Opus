const express = require("express");
const router = express.Router();

const { createTodo } = require("../controllers/todos/createTodo");
const { deleteTodo } = require("../controllers/todos/deleteTodo");
const { getTodos } = require("../controllers/todos/getTodos");
const { getTodo } = require("../controllers/todos/getTodo");
const { updateTodo } = require("../controllers/todos/updateTodo");

router.post("/createTodo", createTodo);
router.delete("/deleteTodo/:id", deleteTodo);
router.get("/getTodos", getTodos);
router.put("/updateTodo/:id", updateTodo);
router.get("/getTodo/:id", getTodo);

module.exports = router;
