// Modal.jsx
import React from 'react';

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Your session has timed out.</h2>
        <p>Please log in again.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
