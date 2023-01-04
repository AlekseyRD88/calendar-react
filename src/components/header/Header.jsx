import React from 'react';
import { months } from '../../../src/utils/dateUtils.js';
import './header.scss';
import PropTypes from 'prop-types';

const Header = ({weekStartDate, setWeekStartDate, weekDates, openModal }) => {
    const getCurrentMonth = weekDates => {
    const weekStartMonth = months[weekDates[0].getMonth()];
    const weekEndMonth = months[weekDates[6].getMonth()];
    return weekStartMonth === weekEndMonth ? weekStartMonth : `${weekStartMonth} - ${weekEndMonth}`;
  };
  const currentMonth = getCurrentMonth(weekDates);
  
  return (
    <header className="header">
      <button className="button create-event-btn" onClick={openModal}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={() => setWeekStartDate(new Date())}>Today</button>
        <button className="icon-button navigation__nav-icon" onClick={() => setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() - 7)))}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={() => setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() + 7)))}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{currentMonth}</span>
      </div>
    </header>
  );
};

Header.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default Header;
