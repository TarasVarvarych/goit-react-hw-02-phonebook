import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// const persistConfig = {
//   key: 'Contacts',
//   storage,
//   serialize: JSON.stringify,
//   deserialize: JSON.parse,
// };

const contactsSlice = createSlice({
  name: 'Contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    deleteContact(state, action) {
      state.filter(contact => contact.id !== action.payload);
    },
  },
});

// export const contactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
