import React, { useEffect, useRef } from 'react';
import * as PropTypes from 'prop-types';
import './styles.css';

const Modal = ({ setModalIsOpen, text }) => {
  const modalRef = useRef(null);

  // Close modal on Escape key press
  useEffect(() => {
    const closeOnEscapeKey = (e) => e.key === 'Escape' ? setModalIsOpen(false) : null;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [setModalIsOpen]);

  // Focus the modal when it opens
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, []);

  return (
    <div className="modal-background" onClick={() => setModalIsOpen(false)}>
      <div className="modal-container" ref={modalRef} onClick={(e) => e.stopPropagation()} tabIndex={-1}>
        <button className="modal-closer" onClick={() => setModalIsOpen(false)}>x</button>
        <p>{text}</p>
      </div>
    </div>
  );
};

Modal.propTypes = {
  setModalIsOpen: PropTypes.func.isRequired,
  text: PropTypes.string
};

Modal.defaultProps = {
  text: 'your text!' // Default text in case none is provided
};

export default Modal;
