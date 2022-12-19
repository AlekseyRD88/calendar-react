import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import events from '../../gateway/events';

import './calendar.scss';

/* const listItemClasses = classNames('list-item', {'list-item_done': done});
  return(
  <li className={listItemClasses}>

*/

const Calendar = ({weekDates, tasks, setTasks }) => {
  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week weekDates={weekDates} tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </section>
  );
}




export default Calendar;
