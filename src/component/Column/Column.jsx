import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCard, editColumnTitle } from '../../reducer/actions';
import Card from '../Card/Card';
import styles from './Column.module.css';

const Column = ({ title: initialTitle, columnId }) => {
  const dispatch = useDispatch();
  const column = useSelector(state => state.columns.find(column => column.id === columnId));
  const [newCardText, setNewCardText] = useState('');
  const [newTitle, setNewTitle] = useState(initialTitle || 'Default Title'); // Utilizar un título por defecto si no se especifica ninguno
  const [isEditing, setIsEditing] = useState(false);
  const [showTextArea, setShowTextArea] = useState(false);

  console.log(column,' vamos a ver que onda')

  const handleAddCardClick = () => {
    setShowTextArea(true);
  };

  const handleAddCard = () => {
    if (newCardText.trim() !== '') {
      dispatch(addCard(columnId, newCardText));
      setNewCardText('');
      setShowTextArea(false);
    }
  };

  const handleCancelAddCard = () => {
    setNewCardText('');
    setShowTextArea(false);
  };

  const handleTitleClick = () => {
    setIsEditing(true);
  };

  const handleSaveTitle = () => {
    if (newTitle.trim() === '') { // Verificar si se ingresó un título nuevo
      setNewTitle('Default Title'); // Si no se ingresó ningún título, utilizar el título por defecto
    }
    dispatch(editColumnTitle(columnId, newTitle));
    setIsEditing(false);
  };

  return (
    <div className={styles.column} style={{ border: "1px solid #ccc", padding: "10px", width: "250px", height: "100%", backgroundColor: 'blue', marginLeft: '10px', minWidth: '200px', overflowY: 'auto'}}>
      <div className={styles.title}>
          {isEditing ? (
            <input
              className={styles.titleInput}
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onBlur={handleSaveTitle}
              autoFocus
            />
          ) : (
            <h3 className={styles.h3} onClick={handleTitleClick}>{newTitle}</h3> 
          )}
          {isEditing && (
            <button className={styles.saveButton} onClick={handleSaveTitle}>Guardar</button>
          )}
        </div>
      {column.cards.map(card => (
        <Card key={card.id} text={card.text} />
      ))}
      {showTextArea && (
        <div style={{ marginTop: '10px' }}>
          <textarea
            className={styles.input}
            value={newCardText}
            onChange={(e) => setNewCardText(e.target.value)}
            placeholder="Enter card text"
          />
          <div className={styles.botones}>
            <button className={styles.addcard} onClick={handleAddCard}>Add Card</button>
            <button onClick={handleCancelAddCard}>Cancel</button>
          </div>
        </div>
      )}
      {!showTextArea && (
        <button onClick={handleAddCardClick}>Add Card</button>
      )}
    </div>
  );
};

export default Column;
