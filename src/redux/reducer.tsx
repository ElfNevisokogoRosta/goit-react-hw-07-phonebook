import { createSlice } from "@reduxjs/toolkit";
import { ContactBookI } from "../utils/interfase";
import { deleteContact, fetchContacts, addContact } from "./async.thunk";

const ContactBookInitialState: ContactBookI = {
  contacts: [],
  filter: "",
  isLoading: false,
  error: undefined,
};

const ContactBookSlice = createSlice({
  name: "contactBook",
  initialState: ContactBookInitialState,
  reducers: {
    filterHandler(state, action) {
      state.filter = action.payload;
    },
    addContactR(state, action) {
      const newContact = action.payload;
      state.contacts.push(newContact);
    },
    removeContactR(state, action) {
      const contactId = action.payload;
      state.contacts = state.contacts.filter(
        (contacts) => contacts.id !== contactId
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { filterHandler, addContactR, removeContactR } =
  ContactBookSlice.actions;
export const contactBook = ContactBookSlice.reducer;
