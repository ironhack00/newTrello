import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import styles from './Card.module.css'

const Card = ({ name }) => {
  const [content, setContent] = useState(
    'hola'
  );
  const [isEditing, setIsEditing] = useState(false);
  const contentRef = useRef(null);

  const handleContentClick = () => {
    setIsEditing(true);
    // Pone el foco en el área de edición de texto cuando se hace clic en él
    contentRef.current.focus();
  };

  const handleContentChange = () => {
    // Actualiza el estado de contenido con el texto modificado
    setContent(contentRef.current.textContent);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 my-2 md:my-4 w-full md:w-64 relative">
        
      <button className={`${styles.button} absolute top-2 right-2 text-gray-900 p-1 rounded-full bg-blue-500 hover:bg-red-500 transition-colors ease-in-out transform hover:scale-110 z-10`}>
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
   




      <div className="bg-gray-100 rounded-lg p-4">
        <div
          ref={contentRef}
          className={`text-gray-700 mb-2 border-b border-gray-400 focus:outline-none focus:border-blue-500 ${isEditing ? 'block' : 'hidden'}`}
          contentEditable={isEditing}
          onBlur={handleContentChange}
          suppressContentEditableWarning={true}
        >
          {content}
        </div>
        <button
          className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mr-2 ${isEditing ? 'block' : 'hidden'}`}
          onClick={handleSave}
        >
          Guardar
        </button>
        <p
          className={`text-gray-700 mb-2 cursor-pointer ${isEditing ? 'hidden' : 'block'}`}
          onClick={handleContentClick}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default Card;
