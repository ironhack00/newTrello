// En el archivo actions.js
export const ADD_COLUMN = 'ADD_COLUMN';
export const ADD_CARD = 'ADD_CARD';
export const EDIT_COLUMN_TITLE = 'EDIT_COLUMN_TITLE';
export const EDIT_CARD_TEXT = 'EDIT_CARD_TEXT';

export const addColumn = (title) => ({
  type: ADD_COLUMN,
  payload: {
    title: title,
  }
});

export const addCard = (columnId, cardText) => ({
  type: ADD_CARD,
  payload: {
    columnId: columnId,
    cardText: cardText,
  }
});

export const editColumnTitle = (columnId, newTitle) => ({
  type: EDIT_COLUMN_TITLE,
  payload: {
    columnId: columnId,
    newTitle: newTitle,
  }
});

export const editCardText = (columnId, cardId, newText) => ({
  type: EDIT_CARD_TEXT,
  payload: {
    columnId: columnId,
    cardId: cardId,
    newText: newText,
  }
});
