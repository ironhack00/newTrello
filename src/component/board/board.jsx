import React, { useState } from 'react';
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Column from '../Column/Column';
import styles from './board.module.css'

const Board = () => {
    const [people, setPeople] = useState([
        { name: 'person1', id: 1 },
        { name: 'person2', id: 2 },
        { name: 'person3', id: 3 },
        { name: 'person4', id: 4 },
        { name: 'person4', id: 5 },
     
       
    ]);

    const handleDragEnd = () => {
        // Aquí puedes manejar el evento cuando el drag and drop finaliza
    }

    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            
            <div className={styles.boardContainer}>
                <SortableContext
                    items={people}
                    strategy={verticalListSortingStrategy}
                >
                    {/* Renderiza cada columna con su respectivo título */}
                    {people.map(person => (
                        <Column key={person.id} columnTitle={person.name} />
                    ))}
                </SortableContext>
            </div>
        </DndContext>          
    );
}

export default Board;
