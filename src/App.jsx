import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import events from './gateway/events';


import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';
const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  useEffect(() => {
    setWeekStartDate(weekStartDate);
  }, []);
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  handleChange = event => {
    const { name, value } = event.target;
    const [newEvent, setNewEvent] = useState({
      id: Math.random(),
      title: '',
      description: '',
      startTime: new Date(),
      endTime: new Date(),
    });  
    //setNewEvent(event([name]: value));
    const [task, setTask] = useState(events);
    setTask(task.concat(newEvent));
    
  }
  handleSubmit = event => {
    event.preventDefault();
  }
  return (
    <>
      <Header 
      weekStartDate={weekStartDate}
      setWeekStartDate={setWeekStartDate}
      handleChange={handleChange}
      />
      <Calendar weekDates={weekDates} />
    </>
  );
} 

export default App;
