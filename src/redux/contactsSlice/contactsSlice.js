import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
  handleDeleteFulfilled,
  handleGetFulfilled,
  handlePending,
  handleAddFulfilled,
  handleRejected,
} from '../contactsAPI';
// import {
//   handleDeleteFulfilled,
//   handleGetFulfilled,
//   handlePending,
//   handleAddFulfilled,
//   handleRejected,
// } from 'redux/contactsAPI/handlers';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'Contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleGetFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleAddFulfilled)
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleDeleteFulfilled)
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
