import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import { fetchEventsList, createEvent, deleteEvent } from './gateway/gateway.js';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import './common.scss';


const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const [modal, setModal] = useState(false);
  const changeModal = () => {
    setModal(!modal);
  };
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchEvents();
  }, []);
  const fetchEvents = () => {
    fetchEventsList().then(eventsList => 
      setEvents(eventsList)
    );
  }
  
const handleCreate = dataEvent => {
  const { title, date, startTime, endTime, description } = dataEvent;
  const newEvent = {
    title,
    description,
    dateFrom: new Date(`${date} ${startTime} `),
    dateTo: new Date(`${date} ${endTime}`),
  };

  createEvent(newEvent).then(() => {
    fetchEvents();
    changeModal();
  });
};
const handleDelete = (id) => {
  deleteEvent(id).then(() => fetchEvents());
}

  return (
    <>
      <Header 
      weekDates={weekDates}
      weekStartDate={weekStartDate}
      setWeekStartDate={setWeekStartDate}
      openModal={changeModal}
      />
      <Calendar 
      weekDates={weekDates} 
      events={events}  
      onDelete={handleDelete}
      changeModal={changeModal}
      />
       {modal && (
       <Modal
          closeModal={changeModal}
          onCreateEvent={handleCreate}
       />
     )} 
    </>
  );
} 

export default App;
