import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import EventsForm from "../../components/event-form/event-form.component";
import Navbar from "../../components/navbar/navbar.component";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "./eventspage.css";

const locales = {
  "en-IN": require("date-fns/locale/en-IN"),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    start: new Date(2022, 5, 24),
    end: new Date(2022, 5, 24),
  },
  {
    title: "Vacation",
    start: new Date(2022, 5, 23),
    end: new Date(2022, 5, 23),
  },
  {
    title: "Conference",
    start: new Date(2022, 5, 23),
    end: new Date(2022, 5, 23),
  },
];

function Eventspage() {
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);

  async function handleGetEvents() {
    const response = await fetch(
      "https://opus-live.herokuapp.com/events/getEvents",
      {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    const data = await response.json();

    if (data.status === true) {
      setEvents(data.events);
    } else {
      alert("Error retrieving events");
    }
  }

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    } else {
      handleGetEvents();
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="eventspage">
        <div className="container-events-form">
          <EventsForm stateChangerEventForm={handleGetEvents} />
        </div>
        <div className="calendar">
          <Calendar
            localizer={localizer}
            events={events}
            startAcessor="start"
            endAccessor="end"
            views={{
              month: true,
              agenda: true,
            }}
            style={{ height: 800 }}
            eventPropGetter={(title, start, end) => ({
              title,
              start,
              end,
              style: { backgroundColor: "#5aba89", color: "white" },
            })}
            dayPropGetter={(isSelected) => ({
              isSelected,
              style: { backgroundColor: "white" },
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default Eventspage;
