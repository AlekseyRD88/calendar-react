import React from 'react';
import Day from '../day/Day';
import PropTypes from 'prop-types';
import './week.scss';


const Week = ({ weekDates, events, onDelete, changeModal }) => {
  return (
    <div className="calendar__week" onClick={ () => {
      changeModal();
    }}>
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );

        //getting all events from the day we will render
        const dayEvents = events.filter(
          (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
        );

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            onDelete={onDelete}
            closeModal={changeModal}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array,
  onDelete: PropTypes.func,
  // getOnClickDate: PropTypes.func.isRequired,
  changeModal: PropTypes.func.isRequired,
};

export default Week;
