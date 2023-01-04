import React, { useState } from 'react';
import moment from 'moment';
import './modal.scss';


const Modal = ({ closeModal, onCreateEvent }) => {
  const [formState, setFormState] = useState({
    //id: Math.random(),
    title: '',
    description: '',
    date: moment().format('YYYY-MM-DD'),
    startTime: moment().format('HH:mm'),
    endTime: moment().add(30, 'minutes').format('HH:mm'),
  });
  
  const handleChange = e => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
    
  };
  const { title, description, date, startTime, endTime } = formState;
  
  const handleSubmit = e => {
    e.preventDefault();
    onCreateEvent(formState)
  }
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={closeModal}>+</button>
          <form className="event-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={title}
              onChange={handleChange}
            />
            <div className="event-form__time">
              <input 
                type="date" 
                name="date" 
                className="event-form__field" 
                value={date} 
                onChange={handleChange}/>
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                value={startTime}
                onChange={handleChange}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                value={endTime}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={description}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
