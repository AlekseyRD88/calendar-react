import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './modal.scss';

const Modal = ( { closeModal, tasks, setTasks} ) => {
  const [formState, setFormState] = useState({
    id: Math.random(),
    title: '',
    description: '',
    date: moment().format('YYYY-MM-DD'),
    startTime: moment().format('HH:mm'),
    endTime: moment().add(15, 'minutes').format('HH:mm'),
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setTasks([...tasks, formState]);
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
              <input type="date" name="date" className="event-form__field" />
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
            <button type="submit" className="event-form__submit-btn" onSubmit={handleSubmit}>
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Modal;
