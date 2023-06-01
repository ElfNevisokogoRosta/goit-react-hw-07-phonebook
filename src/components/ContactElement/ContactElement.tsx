import React from "react";
import {
  Container,
  DataContainer,
  NumberContainer,
  Btn,
} from "./ContactElement.styled";
import { useDispatch } from "react-redux";
import { removeContact } from "../../redux/reducer";
interface ContactElementProps {
  contact: { id: string; name: string; number: string };
}

export const ContactElement: React.FC<ContactElementProps> = ({ contact }) => {
  const dispatch = useDispatch();
  const deletContactHandler = (e: React.PointerEvent<HTMLButtonElement>) => {
    dispatch(removeContact(contact.id));
  };
  return (
    <Container key={contact.id}>
      <DataContainer>
        <NumberContainer>{contact.name}:</NumberContainer>{" "}
        <NumberContainer>{contact.number}</NumberContainer>
      </DataContainer>

      <Btn id={contact.id} onClick={deletContactHandler}>
        delete
      </Btn>
    </Container>
  );
};
