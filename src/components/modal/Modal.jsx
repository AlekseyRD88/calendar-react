import React, { useState, useRef } from 'react';

import './modal.scss';

const Modal = ({handleChange, closeModal}) => {
  const [value, setValue] = useState({
    id: Math.random(),
    title: '',
    description: '',
    dateFrom: new Date(),
    dateTo: new Date(),
  });
  const form = useRef(null);
  handleChange = event => {
    event.preventDefault();
    value = new formData(form.current);
    setValue(value);
  }
  handleTaskCreate = () => {
    onCreate(value);
  }
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={() => closeModal(false)}>+</button>
          <form className="event-form" ref={form} onSubmit={handleChange}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
            />
            <div className="event-form__time">
              <input type="date" name="date" className="event-form__field" />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                // onChange={handleChange}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
            ></textarea>
            <button type="submit" className="event-form__submit-btn" onClick={handleTaskCreate}>
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Modal;
