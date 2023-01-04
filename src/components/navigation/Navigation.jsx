import React from 'react';
import './navigation.scss';
import { days } from '../../utils/dateUtils.js';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Navigation = ({ weekDates }) => {
  return (
    <header className="calendar__header">
      {weekDates.map(dayDate => {
        const dateToday = new Date().toDateString() === dayDate.toDateString();
        const numberClass = classNames('day-label__day-number', {
          'day-label__day-number_today': dateToday,
        });
        const dayClass = classNames('day-label__day-name', {
          'day-label__day-name_today': dateToday,
        });
        return(
        <div className="calendar__day-label day-label" key={Math.random()}>
          <span className={dayClass} >{days[dayDate.getDay()]}</span>
          <span className={numberClass}>{dayDate.getDate()}</span>
        </div>
        );
        })}
    </header>
  );
};
Navigation.propTypes = {
  weekDates: PropTypes.array.isRequired,
};
export default Navigation;
