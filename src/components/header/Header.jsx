import React from 'react';
//import moment from 'moment';
import { months } from '../../../src/utils/dateUtils.js';
import './header.scss';

const Header = ({weekStartDate, setWeekStartDate }) => {
  
  const month = new Date();
  let currentMonth = months[month.getMonth()]
  return (
    <header className="header">
      <button className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={() => setWeekStartDate(weekStartDate)}>Today</button>
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

export default Header;
