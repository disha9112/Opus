import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import "./note.styles.css";

const Note = () => {
  return (
    <div className="note-container">
      <div
        className="main-note-container"
        style={{
          overflowY: "scroll",
          height: "300px",
        }}
      >
        <div>
          <div className="note-header">
            <div className="note-date">date</div>
            <div className="buttons">
              <FaTrash className="btn-trash" size={28} />
              <FaEdit className="btn-edit" size={30} />
            </div>
          </div>
          <div className="note-footer">
            <div className="note-title">title</div>
            <div className="note-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              luctus aliquam diam a auctor. Nullam fringilla nibh quam, ac
              congue quam porta a. Mauris ultrices interdum pellentesque.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
