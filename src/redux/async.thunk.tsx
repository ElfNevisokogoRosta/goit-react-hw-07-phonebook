import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ContactI } from "../utils/interfase";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://647dc40aaf984710854a45f9.mockapi.io";

const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  try {
    const res = await axios.get("/contacts");
    return res.data;
  } catch (error) {
    return error;
  }
});
const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id: string) => {
    try {
      await axios.delete(`/contacts/${id}`);
      toast.success("Contact was deleted");
    } catch (error) {
      return error;
    }
  }
);
const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact: ContactI) => {
    try {
      await axios.post("contacts", contact);
    } catch (error) {
      throw error;
    }
  }
);
export { fetchContacts, deleteContact, addContact };
