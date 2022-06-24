import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Button from "../../components/button/button.component";
import calendar from "../../assets/calendar.png";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./event-form.styles.css";

const locales = {
  "en-IN": require("date-fns/locale/en-IN"),
};

function EventsForm({ stateChangerEventForm }) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  async function handleEventSubmit(event) {
    event.preventDefault();

    const response = await fetch(
      "https://opus-live.herokuapp.com/events/createEvent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          title,
          start,
          end,
        }),
      }
    );

    const data = await response.json();

    if (data.status === true) {
      alert("Event created successfully");
      stateChangerEventForm();
      setTitle("");
      setStart("");
      setEnd("");
    } else {
      alert("There was an error, kindly try again");
    }
  }

  return (
    <div>
      <div className="events-form">
        <img src={calendar} alt="calendar" />
        <form onSubmit={handleEventSubmit}>
          <div className="eventspage-content">Add an event</div>
          <input
            type="text"
            placeholder="Add Title"
            required
            value={title}
            onChange={handleTitleChange}
          />
          <div className="container-date-picker">
            <div>
              <DatePicker
                placeholderText="Start Date"
                selected={start}
                onChange={(start) => setStart(start)}
              />
            </div>
            <div>
              <DatePicker
                placeholderText="End Date"
                selected={end}
                onChange={(end) => setEnd(end)}
              />
            </div>
          </div>
          {/* <div className="container-time-picker">
              <div>
                <input type="text" placeholder="Start (HH:MM:SS)" />
              </div>
              <div>
                <input type="text" placeholder="End (HH:MM:SS)" />
              </div>
            </div> */}
          <Button authSubmit>Add Event</Button>
        </form>
      </div>
    </div>
  );
}

export default EventsForm;
