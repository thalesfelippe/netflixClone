import React, { useState } from 'react';
import './style.css';

function Modal(props) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }

  function handleModalClick(event) {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

  return (
    <>
      <img src={props.image} alt="Imagem" onClick={openModal} />
      {isOpen && (
        <div className="modal" onClick={handleModalClick}>
          <div className="modal-content">
            {props.children}
            <button onClick={closeModal} className="close-modal">x</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;