// Board.js
import React from 'react';
import { useSelector } from 'react-redux';
import Column from '../Column/Column';
import AddColumnButton from '../AddColumnButton/AddColumnButton';
import styles from './board.module.css';

const Board = () => {
  const columns = useSelector(state => state.columns);

  return (
    <div>
      <div className={styles.board}>
        {columns.map(column => (
          <Column key={column.id} title={column.title} columnId={column.id} />
        ))}
        <AddColumnButton />
      </div>
    </div>
  );
};

export default Board;
