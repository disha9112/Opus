const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const auth = require("./routes/auth");
const notes = require("./routes/notes");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 8000;
const url = process.env.ATLAS_URL;

mongoose.connect(url, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database connection established successfully");
});

app.use(express.json());
app.use(cors());
app.use("/auth", auth);
app.use("/notes", notes);

app.get("/", (req, res) => {
  res.send("This is Opus!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
