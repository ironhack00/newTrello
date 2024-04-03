import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from '../reducer/reducer';
import { thunk } from 'redux-thunk';

const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
   devTools: process.env.NODE_ENV !== 'production', // Habilitar Redux DevTools solo en entornos de desarrollo
});

export default store;
