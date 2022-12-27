import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './modal.scss';
import { createEvent } from '../../gateway/events';
import PropTypes from 'prop-types';

const Modal = ( { closeModal, tasks, setTasks, fetchEvents} ) => {
  const [formState, setFormState] = useState({
    id: Math.random(),
    title: '',
    description: '',
    date: moment().format('YYYY-MM-DD'),
    startTime: moment().format('HH:mm'),
    endTime: moment().add(30, 'minutes').format('HH:mm'),
  });
  

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    createEvent(formState).then(() => {
      fetchEvents();
    });
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    const { title, description, date, startTime, endTime } = formState;
    setTasks([...tasks, {
      id: Math.random(),
      title,
      description,
      dateFrom: new Date(`${date} ${startTime} `),
      dateTo: new Date(`${date} ${endTime}`),
    },
    ]);
    closeModal(false);
  }
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={() => closeModal(false)}>+</button>
          <form className="event-form">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={formState.title}
              onChange={handleChange}
            />
            <div className="event-form__time">
              <input type="date" name="date" className="event-form__field" value={formState.date} onChange={handleChange}/>
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                value={formState.startTime}
                onChange={handleChange}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                value={formState.endTime}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={formState.description}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="event-form__submit-btn" onClick={handleSubmit}>
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
/*
tasks.PropTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  dateFrom: PropTypes.string.isRequired,
  dateTo: PropTypes.string.isRequired,
}
tasks.defaultProps = {
  title: '',
  dateFrom: new Date(`${date} ${startTime} `),
  dateTo: new Date(`${date} ${endTime}`),
}
*/
export default Modal;
