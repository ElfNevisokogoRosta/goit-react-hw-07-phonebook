import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Contact } from "../../App";
import { ContactBookI } from "../../redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/reducer";
import {
  Formwraper,
  FormContainer,
  NameInput,
  NumberInput,
  Btn,
} from "./Form.styled";
export const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const reduxContacts = useSelector(
    (state: { contactBook: ContactBookI }) => state.contactBook.contact
  );
  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const numberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };
  const formHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newContact: Contact = { id: uuidv4(), name, number };
    const isInAList = reduxContacts.find(
      (contact) => contact.name === newContact.name
    );
    if (isInAList) {
      return alert("This contact already in a list");
    }
    dispatch(addContact(newContact));
    setName("");
    setNumber("");
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
