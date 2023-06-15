import React from "react";
import {
  Container,
  DataContainer,
  NumberContainer,
  Btn,
} from "./ContactElement.styled";
import { removeContactR } from "../../redux/reducer";
import { useAppDispatch } from "../../redux/store";
import { deleteContact } from "../../redux/async.thunk";

interface ContactElementProps {
  contact: { id: string; name: string; number: string };
}

export const ContactElement: React.FC<ContactElementProps> = ({ contact }) => {
  const dispatch = useAppDispatch();
  const removeContact = (id: string) => {
    dispatch(removeContactR(id));
    dispatch(deleteContact(id));
  };
  return (
    <Container key={contact.id}>
      <DataContainer>
        <NumberContainer>{contact.name}:</NumberContainer>{" "}
        <NumberContainer>{contact.number}</NumberContainer>
      </DataContainer>

      <Btn id={contact.id} onClick={() => removeContact(contact.id)}>
        delete
      </Btn>
    </Container>
  );
};
