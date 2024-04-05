import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCard, editColumnTitle, editCardText } from '../../reducer/actions';
import Card from '../Card/Card';
import styles from './Column.module.css';


const Column = ({ title: initialTitle, columnId }) => {
  const dispatch = useDispatch();
  const column = useSelector(state => state.columns.find(column => column.id === columnId));
  const [newCardText, setNewCardText] = useState('');
  const [newTitle, setNewTitle] = useState(initialTitle || 'Default Title');
  const [isEditing, setIsEditing] = useState(false);
  const [showTextArea, setShowTextArea] = useState(false);
  const [editingCardId, setEditingCardId] = useState(null); // Nuevo estado para almacenar el ID de la tarjeta en edición

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
    if (newTitle.trim() === '') {
      setNewTitle('Default Title');
    }
    dispatch(editColumnTitle(columnId, newTitle));
    setIsEditing(false);
  };

  const handleEditCardText = (cardId, newText) => {
    dispatch(editCardText(columnId, cardId, newText));
    setEditingCardId(null); // Restablecer el estado de la tarjeta en edición
  };

  const handleCardDoubleClick = (cardId) => { // Función para manejar el doble clic en una tarjeta y habilitar la edición de su texto
    setEditingCardId(cardId);
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
        <Card
          key={card.id}
          text={card.text}
          onEdit={(newText) => handleEditCardText(card.id, newText)}
          onDoubleClick={() => handleCardDoubleClick(card.id)} // Agregar el manejador de doble clic en la tarjeta
          isEditing={editingCardId === card.id} // Pasar el estado de edición de la tarjeta a la tarjeta individual
        />
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
