import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { ContactBookI, ContactI } from "../../utils/interfase";
import { addContact } from "../../redux/async.thunk";
import { addContactR } from "../../redux/reducer";
import {
  Formwraper,
  FormContainer,
  NameInput,
  NumberInput,
  Btn,
} from "./Form.styled";
import { toast } from "react-toastify";

export const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(
    (state: { contactBook: ContactBookI }) => state.contactBook.contacts
  );
  const dispatch = useAppDispatch();
  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const numberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };
  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newContact: ContactI = { id: uuidv4(), name, number };
    const isInAlist = contacts.some(
      (contact) => contact.name === newContact.name
    );

    if (!isInAlist) {
      dispatch(addContact(newContact));
      dispatch(addContactR(newContact));
      toast.success("New contact was added");
    } else {
      toast.error("Cannot add new contact with name which already existed");
    }
  };

  return (
    <Formwraper onSubmit={formHandler}>
      <FormContainer>
        <NameInput
          value={name}
          type="text"
          name="name"
          onChange={nameHandler}
          required
          placeholder="Name"
        />
        <NumberInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={numberHandler}
          placeholder="Phone number"
          value={number}
        />
        <Btn type="submit">Add contact</Btn>
      </FormContainer>
    </Formwraper>
  );
};
