import React from "react";
import moment from "moment";
import { FaTrash, FaEdit } from "react-icons/fa";
import "./note.styles.css";

const Note = ({ id, date, title, description }) => {
  return (
    <div className="note-container">
      <div
        className="main-note-container"
        style={{
          overflowY: "scroll",
          height: "250px",
        }}
      >
        <div>
          <div className="note-header">
            <div className="note-date">{moment(date).fromNow()}</div>
            <div className="buttons">
              <FaTrash className="btn-trash" size={28} />
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
};

export default Note;
