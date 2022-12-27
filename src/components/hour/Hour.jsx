import React from 'react';
import classNames from 'classnames';
import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';
import { deleteEvent } from '../../gateway/events';




const Hour = ({ dataHour, hourEvents, dataDay, tasks, setTasks, fetchEvents }) => {
  const date = new Date();
  const hourClasses = classNames('calendar__time-slot', {'red-line': dataHour === date.getHours() && dataDay === date.getDate()});
  const handleEventDelete = (id) => {
    deleteEvent(id).then(() => fetchEvents());
    /*const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);*/
  };
  return (
    <div className={hourClasses} data-time={dataHour + 1}>
      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(
          dateFrom.getMinutes()
        )}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(
          dateTo.getMinutes()
        )}`;

        return (
          <Event
            key={id}
            //calculating event height = duration of event in minutes
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            onDelete={handleEventDelete}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default Hour;
