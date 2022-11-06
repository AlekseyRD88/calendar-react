import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { getWeekStartDate, generateWeekRange } from '../../../src/utils/dateUtils.js';
import './header.scss';

const Header = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  useEffect(() => {
    setWeekStartDate(weekStartDate);
  }, [])
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  let [week, setWeek] = useState(weekDates); 
  useEffect(() => {
    setWeek(week)
  }, []);
  let handleClickForward = () => {
    week = moment().add(7, 'days')
    setWeek(week);
  };
  let handleClickPast = () => {
    week = moment().subtract(7, 'days')
    setWeek(week);
  };
  return (
    <header className="header">
      <button className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button">Today</button>
        <button className="icon-button navigation__nav-icon" onClick={handleClickPast}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={handleClickForward}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month"></span>
      </div>
    </header>
  );
};

export default Header;
