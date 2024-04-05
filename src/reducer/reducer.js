import { ADD_COLUMN, ADD_CARD, EDIT_COLUMN_TITLE } from './actions';

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
      const { columnId: addColumnId, cardText } = action.payload; // Renombrar columnId a addColumnId
      return {
        ...state,
        columns: state.columns.map(column => {
          if (column.id === addColumnId) { // Utilizar addColumnId
            return {
              ...column,
              cards: [...column.cards, { id: Math.random().toString(36).substr(2, 9), text: cardText }]
            };
          }
          return column;
        })
      };
    case EDIT_COLUMN_TITLE:
      const { columnId: editColumnId, newTitle } = action.payload; // Renombrar columnId a editColumnId
      return {
        ...state,
        columns: state.columns.map(column => {
          if (column.id === editColumnId) { // Utilizar editColumnId
            return {
              ...column,
              title: newTitle
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
