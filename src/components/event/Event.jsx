import React, { useState } from 'react';
import Popup from '../popup/Popup.jsx'
import './event.scss';
import PropTypes from 'prop-types';

const Event = ({ height, marginTop, title, time, onDelete, id }) => {
  const [popup, setPopup] = useState(false);
  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div style={eventStyle} className="event" 
    onClick={(e) => {setPopup(!popup); 
    e.stopPropagation();
    }}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {popup && <Popup id={id} onDelete={onDelete}/>}
    </div>
  );
};
Event.propTypes = {
  height: PropTypes.number,
  marginTop: PropTypes.number,
  title: PropTypes.string,
  time: PropTypes.string,
  id: PropTypes.string,
  onDelete: PropTypes.func,
};
export default Event;
