import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from 'redux/contactsSlice/contactsSlice';
import { filterSliceReducer } from 'redux/filterSlice/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSliceReducer,
  },
});
