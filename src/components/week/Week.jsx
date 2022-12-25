import React from 'react';
import Day from '../day/Day';

import './week.scss';

const Week = ({ weekDates, tasks, setTasks, fetchEvents }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );

        //getting all events from the day we will render
        const dayEvents = tasks.filter(
          (task) => task.dateFrom > dayStart && task.dateTo < dayEnd
        );

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            tasks={tasks} 
            setTasks={setTasks}
            fetchEvents={fetchEvents}
          />
        );
      })}
    </div>
  );
};

export default Week;
