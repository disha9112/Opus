import React, { useState } from "react";
import Button from "../../components/button/button.component";
import "./note-form.styles.css";

const NoteForm = ({ stateChangerForm }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  async function handleNoteSubmit(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/notes/createNote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });

    const data = await response.json();

    if (data.status === true) {
      alert("Note created successfully");
      stateChangerForm();
    } else {
      alert("There was an error, kindly try again");
    }
  }

  return (
    <div className="note-form-container">
      <form className="note-form" onSubmit={handleNoteSubmit}>
        <h1>Jot down a note</h1>
        <input
          type="text"
          placeholder="Title"
          required
          value={title}
          onChange={handleTitleChange}
        />
        <textarea
          type="text"
          placeholder="Description"
          required
          value={description}
          onChange={handleDescriptionChange}
        />
        <Button authSubmit>Create</Button>
      </form>
    </div>
  );
};

export default NoteForm;
