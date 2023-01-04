import React from 'react';
import Hour from '../hour/Hour';
import './day.scss';
import PropTypes from 'prop-types';

const Day = ({ dataDay, dayEvents, onDelete, closeModal }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map((hour) => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );

        return (
          <Hour 
          key={dataDay + hour} 
          dataHour={hour} 
          hourEvents={hourEvents} 
          dataDay={dataDay} 
          onDelete={onDelete} 
          closeModal={closeModal}/>
        );
      })}
    </div>
  );
};

Day.propTypes = {
  dataDay: PropTypes.number.isRequired,
  dayEvents: PropTypes.array,
  onDelete: PropTypes.func,
  closeModal: PropTypes.func.isRequired,
};

export default Day;
