import React from 'react';
import Hour from '../hour/Hour';
import classNames from 'classnames';
import './day.scss';

const Day = ({ dataDay, dayEvents, tasks, setTasks }) => {
  const date = new Date();
  const dayClasses = classNames('calendar__day', {'red-line': dataDay === date.getDay()});
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className={dayClasses} data-day={dataDay}>
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );

        return (
          <Hour key={dataDay + hour} dataHour={hour} hourEvents={hourEvents} tasks={tasks} setTasks={setTasks}/>
        );
      })}
    </div>
  );
};

export default Day;
