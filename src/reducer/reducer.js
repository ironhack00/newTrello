// En el archivo reducer.js
import { ADD_COLUMN, ADD_CARD, EDIT_COLUMN_TITLE, EDIT_CARD_TEXT } from './actions';

const initialState = {
  columns: [
    { id: 1, title: '', cards: [] },
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_COLUMN:
      const newColumn = {
        id: state.columns.length + 1,
        title: action.payload.title,
        cards: []
      };
      return {
        ...state,
        columns: [...state.columns, newColumn]
      };
    
    case ADD_CARD:
      const { columnId: addColumnId, cardText } = action.payload;
      return {
        ...state,
        columns: state.columns.map(column => {
          if (column.id === addColumnId) {
            return {
              ...column,
              cards: [...column.cards, { id: Math.random().toString(36).substr(2, 9), text: cardText }]
            };
          }
          return column;
        })
      };
    
    case EDIT_COLUMN_TITLE:
      const { columnId: editColumnId, newTitle } = action.payload;
      return {
        ...state,
        columns: state.columns.map(column => {
          if (column.id === editColumnId) {
            return {
              ...column,
              title: newTitle
            };
          }
          return column;
        })
      };
    
    case EDIT_CARD_TEXT:
      const { columnId: editColumnIdCard, cardId, newText } = action.payload; // Renombrar editColumnId a editColumnIdCard
      return {
        ...state,
        columns: state.columns.map(column => {
          if (column.id === editColumnIdCard) {
            return {
              ...column,
              cards: column.cards.map(card => {
                if (card.id === cardId) {
                  return {
                    ...card,
                    text: newText
                  };
                }
                return card;
              })
            };
          }
          return column;
        })
      };
    
    default:
      return state;
  
    }
};

export default reducer;
