// En un componente llamado AddColumnButton.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../reducer/actions';
import styles from './AddColumnButton.module.css'

const AddColumnButton = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddColumn = () => {
    dispatch(addColumn(title));
    setTitle('');
  };

  return (
    <div className={styles.buttonAddColumn}>
      <input 
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Column title"
      />
      <button className={styles.add} onClick={handleAddColumn}>Add Column</button>
    </div>
  );
};

export default AddColumnButton;
