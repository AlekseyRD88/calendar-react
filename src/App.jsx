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
  const [task, setTask] = useState(events);
  useEffect(() => {
    setTask(task);
  }, []);
  
  return (
    <>
      <Header 
      weekStartDate={weekStartDate}
      setWeekStartDate={setWeekStartDate}
      task={task}
      setTask={task}
      />
      <Calendar weekDates={weekDates} />
    </>
  );
} 

export default App;
