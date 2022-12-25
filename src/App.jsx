import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { fetchEventsList } from './gateway/events';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import './common.scss';


const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  useEffect(() => {
    setWeekStartDate(weekStartDate);
  }, []);
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetchEvents();
  }, []);
  const fetchEvents = () => {
    fetchEventsList().then(eventsList => {
      setTasks(eventsList)
    })
  }
  
  return (
    <>
      <Header 
      weekStartDate={weekStartDate}
      setWeekStartDate={setWeekStartDate}
      tasks={tasks}
      setTasks={setTasks}
      fetchEvents={fetchEvents}
      />
      <Calendar weekDates={weekDates} tasks={tasks} setTasks={setTasks} fetchEvents={fetchEvents}/>
    </>
  );
} 

export default App;
