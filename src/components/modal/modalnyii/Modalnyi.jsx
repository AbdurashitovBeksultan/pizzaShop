import React from 'react';
import PropTypes from 'prop-types';
import scss from './Modalnyi.module.scss';

const Modal = ({ item, onClose }) => {
  return (
    <div className={scss.anotherModalOverlay} onClick={onClose}>
      <div className={scss.anotherModalContent} onClick={(e) => e.stopPropagation()}>
        <img src={item.image} alt={item.name} />
        <h1>{item.name}</h1>
        <p>{item.ingredients}</p>
        <h3>{item.price}</h3>
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

