import React, { useState, useRef, useEffect } from "react";
import Card from '../Card/Card';
import styles from './Column.module.css'; // Importa el archivo de estilos

const Column = () => {
  const [title, setTitle] = useState('Título de la Columna');
  const [isEditing, setIsEditing] = useState(false);
  const titleRef = useRef(null);
  const columnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const column = columnRef.current;
      if (column.scrollHeight > 0.8 * window.innerHeight) {
        column.classList.add(styles.scrollable);
      } else {
        column.classList.remove(styles.scrollable);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTitleClick = () => {
    setIsEditing(true);
    titleRef.current.focus();
  };

  const handleTitleChange = () => {
    setTitle(titleRef.current.textContent);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div ref={columnRef} className={`bg-white shadow-md rounded-lg p-4 my-2 md:my-4 w-full md:w-64 relative ${styles.column}`}>
      <button className={` absolute top-0 right-0 text-gray-900 p-1 rounded-full bg-blue-300 hover:bg-red-500 transition-colors ease-in-out transform hover:scale-110 z-10`}>
        <svg
          className="w-3 h-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className={`bg-gray-700 rounded-lg p-4 ${isEditing ? styles.blackBackground : ''}`}>
        <div
          ref={titleRef}
          className={`text-white font-semibold mb-2 border-b border-gray-400 focus:outline-none focus:border-blue-500 ${isEditing ? 'block' : 'hidden'}`}
          contentEditable={isEditing}
          onBlur={handleTitleChange}
          suppressContentEditableWarning={true}
        >
          {title}
        </div>
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mr-2 ${isEditing ? 'block' : 'hidden'}`}
          onClick={handleSave}
        >
          Guardar
        </button>
        <p
          className={`text-white font-semibold mb-2 cursor-pointer ${isEditing ? 'hidden' : 'block'}`}
          onClick={handleTitleClick}
        >
          {title}
        </p>
      </div>
      
      <div className="flex flex-col gap-4">
        <Card />
        <Card />
        
      </div>
    </div>
  );
};

export default Column;
