

// En el archivo actions.js
export const ADD_COLUMN = 'ADD_COLUMN';

export const addColumn = (title) => ({
  type: ADD_COLUMN,
  payload: {
    title: title,
  }
});

// actions.js
export const ADD_CARD = 'ADD_CARD';

export const addCard = (columnId, cardText) => ({ // Cambiar columnTitle por columnId
  type: ADD_CARD,
  payload: {
    columnId: columnId, // Cambiar columnTitle por columnId
    cardText: cardText,
  }
});

export const EDIT_COLUMN_TITLE = 'EDIT_COLUMN_TITLE';

export const editColumnTitle = (columnId, newTitle) => ({
  type: EDIT_COLUMN_TITLE,
  payload: {
    columnId: columnId,
    newTitle: newTitle,
  }
});

