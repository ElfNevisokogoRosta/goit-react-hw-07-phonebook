import { createSlice } from "@reduxjs/toolkit";
export interface ContactBookI {
  contact: {
    id: string;
    name: string;
    number: string;
  }[];
  filter: string;
}

const ContactBookInitialState: ContactBookI = {
  contact: [],
  filter: "",
};
const ContactBookSlice = createSlice({
  name: "contactBook",
  initialState: ContactBookInitialState,
  reducers: {
    filterHandler(state, action) {
      state.filter = action.payload;
    },

    addContact(state, action) {
      const newContact = action.payload;
      state.contact.push(newContact);
    },
    removeContact(state, action) {
      const contactId = action.payload;
      state.contact = state.contact.filter(
        (contact) => contact.id !== contactId
      );
    },
    resetContactBook(state) {
      state.contact = [];
    },
  },
});
export const { filterHandler, addContact, removeContact, resetContactBook } =
  ContactBookSlice.actions;
export const contactBook = ContactBookSlice.reducer;
