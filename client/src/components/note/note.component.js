import React from "react";
import moment from "moment";
import { FaTrash, FaEdit } from "react-icons/fa";
import "./note.styles.css";

function Note({ id, date, title, description, stateChangerNote }) {
  async function handleNoteDelete() {
    const response = await fetch(
      "http://localhost:8000/notes/deleteNote/" + id,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (data.status === true) {
      alert("Note deleted successfully");
      stateChangerNote();
    } else {
      alert("Error deleting note");
    }
  }

  return (
    <div className="note-container">
      <div className="main-note-container">
        <div>
          <div className="note-header">
            <div className="note-date">{moment(date).fromNow()}</div>
            <div className="buttons">
              <FaTrash
                onClick={() => handleNoteDelete()}
                className="btn-trash"
                size={28}
              />
              <FaEdit className="btn-edit" size={30} />
            </div>
          </div>
          <div className="note-footer">
            <div className="note-title">{title}</div>
            <div className="note-description">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
