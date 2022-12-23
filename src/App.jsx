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
  const [tasks, setTasks] = useState([]);
  /*useEffect(() => {
    setTasks(tasks);
  }, []);*/
  
  return (
    <>
      <Header 
      weekStartDate={weekStartDate}
      setWeekStartDate={setWeekStartDate}
      tasks={tasks}
      setTasks={setTasks}
      />
      <Calendar weekDates={weekDates} tasks={tasks} setTasks={setTasks} />
    </>
  );
} 

export default App;
