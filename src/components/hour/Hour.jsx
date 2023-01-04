import React from 'react';
import classNames from 'classnames';
import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';
import PropTypes from 'prop-types';
import './hour.scss';

const Hour = ({ dataHour, hourEvents, dataDay, onDelete, closeModal }) => {
  const date = new Date();
  const hourClasses = classNames('calendar__time-slot', {'red-line': dataHour === date.getHours() && dataDay === date.getDate()});
  
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
            onDelete={onDelete}
            closeModal={closeModal}
            id={id}
          />
        );
      })}
    </div>
  );
};

Hour.propTypes = {
  dataHour: PropTypes.number.isRequired,
  hourEvents: PropTypes.array,
  onDelete: PropTypes.func,
  closeModal: PropTypes.func.isRequired,
};

export default Hour;
