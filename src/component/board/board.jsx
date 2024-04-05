// Board.js
import React from 'react';
import { useSelector } from 'react-redux';
import Column from '../Column/Column';
import AddColumnButton from '../AddColumnButton/AddColumnButton';
import styles from './board.module.css';
import { DndContext, closestCenter } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy, horizontalListSortingStrategy } from '@dnd-kit/sortable' 

const Board = () => {
  
  const columns = useSelector(state => state.columns);
  
  const handleDragEnd = ()=>{

  }

  return (
    <DndContext
    collisionDetection={closestCenter}
    onDragEnd={handleDragEnd}
    >
      <SortableContext
      items={columns}
      strategy={ horizontalListSortingStrategy }
      >
        <div className={styles.board}>
          {columns.map(column => (
            <Column key={column.id} title={column.title} columnId={column.id} />
          ))}
          <AddColumnButton />
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default Board;
