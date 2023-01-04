import React from 'react';
import './popup.scss';
import PropTypes from 'prop-types';

const Popup = ({ id, onDelete }) => {
  return (
    <div className="delete-event">
      <button className="button delete-event__btn" onClick={() => onDelete(id)}>
        <i className="fas fa-solid fa-trash delete-event__icon "></i>
        Delete
      </button>
    </div>
  );
};


Popup.propTypes = {
  id: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};


export default Popup;