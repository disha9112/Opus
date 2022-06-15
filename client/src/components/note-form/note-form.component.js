import React, { useEffect, useState } from "react";
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
      setTitle("");
      setDescription("");
    } else {
      alert("There was an error, kindly try again");
    }
  }

  async function handleUpdateDetails() {
    const res = await fetch(
      "http://localhost:8000/notes/getNote/" + localStorage.getItem("noteId"),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    const initialData = await res.json();

    if (initialData.status === true) {
      setTitle(initialData.title);
      setDescription(initialData.description);
    } else {
      alert("There was an error, kindly try again");
    }
  }

  async function handleNoteUpdate(event) {
    event.preventDefault();

    const response = await fetch(
      "http://localhost:8000/notes/updateNote/" +
        localStorage.getItem("noteId"),
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          title,
          description,
        }),
      }
    );

    const data = await response.json();

    if (data.status === true) {
      alert("Note updated successfully");
      localStorage.removeItem("noteId");
      stateChangerForm();
      setTitle("");
      setDescription("");
    } else {
      alert("There was an error, kindly try again");
    }
  }

  useEffect(() => {
    if (localStorage.getItem("noteId")) {
      handleUpdateDetails();
    }
  }, []);

  if (localStorage.getItem("noteId")) {
    return (
      <div className="note-form-container">
        <form className="note-form" onSubmit={handleNoteUpdate}>
          <h1>Edit a note</h1>
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
          <Button authSubmit>Update</Button>
        </form>
      </div>
    );
  } else {
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
  }
};

export default NoteForm;
