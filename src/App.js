import React from 'react';
import Board from './component/board/board';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.h1}>Trello</h1>
      <Board />
    </div>
  );
}

export default App;
