import React, { useState, useEffect } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import events from '../../gateway/events';

import './calendar.scss';

const Calendar = ({weekDates, tasks, setTasks}) => {
  /*const [event, setEvents] = useState(events);
  useEffect(() => {
    setEvents(event);
  }, []);*/
  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={weekDates} tasks={tasks} setTasks={setTasks}/>
        </div>
      </div>
    </section>
  );
}




export default Calendar;
