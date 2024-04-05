import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editCardText } from '../../reducer/actions';
import styles from './Card.module.css';

const Card = ({ id, text, isEditing, onEdit, onDoubleClick }) => {
  const dispatch = useDispatch();
  const [newText, setNewText] = useState(text);

  const handleEdit = () => {
    if (newText.trim() !== '') {
      onEdit(newText);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    }
  };

  const handleSaveButtonClick = () => {
    handleEdit();
  };

  const handleBlur = () => {
    handleEdit();
  };

  const handleChange = (e) => {
    setNewText(e.target.value);
  };

  return (
    <div className={styles.card} onDoubleClick={onDoubleClick}>
      {isEditing ? (
        <div>
          <textarea
            className={styles.textarea}
            value={newText}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyPress={handleKeyPress}
            autoFocus
          />
          <button onClick={handleSaveButtonClick}>Guardar</button>
        </div>
      ) : (
        <div className={styles.content}>{text}</div>
      )}
    </div>
  );
};

export default Card;
