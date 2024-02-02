// Modal.jsx

import React from 'react';
import scss from './Modal.module.scss'
import PropTypes from 'prop-types';

const Modal = ({ item, onClose }) => {
  return (
    <div className={scss.modalOverlay} onClick={onClose}>
      <div className={scss.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={item.img} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  item: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
