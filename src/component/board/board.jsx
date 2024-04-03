import React, { useState } from 'react';
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Card from '../Card/Card';
import styles from './board.module.css'

const Board = () => {

   const [people, setPeople] = useState([
        { name: 'person1', id: 1 },
        { name: 'person2', id: 2 },
        { name: 'person3', id: 3 }
    ]);
    const handleDragEnd = ()=>{

    }


    return (
        // se envuelve la parte donde queremos que se puedan mover los elementos
        <DndContext
        // calcula el contenedor más cercano al centro del ítem que se está arrastrando closestCenter
        collisionDetection={ closestCenter }
        //evento que detecta cuando solamos un elemento 
        onDragEnd={ handleDragEnd }
        >
        <SortableContext
        items={people}
        strategy={verticalListSortingStrategy}
        >
           {
            people.map( note =>{
                return(
                    
                    <Card key={note.id} name={note.name}/>
                
                )
            } )
           }
           
        </SortableContext>
            
        </DndContext>
    );
}

export default Board;
