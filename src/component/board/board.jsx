import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Column from '../Column/Column';
import styles from './board.module.css'
import { crearPrimerColumna } from '../../reducer/actions'

const Board = () => {

    const columns = useSelector(state => state.column);
    const dispatch = useDispatch();

    const createColumn = () =>{
        dispatch(crearPrimerColumna());
    };

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
                    items={columns}
                    strategy={verticalListSortingStrategy}
                >
                    {/* Renderiza cada columna con su respectivo título */}
                    {columns.map((column, index) => (
                        <Column key={index} columnId={index} /> // Pasa el ID de la columna como prop
                    ))}
                </SortableContext>
                <button className={styles.buttonCrearColumna} onClick={createColumn}>Crear Columna</button>
            </div>
        </DndContext>          
    );
}

export default Board;
