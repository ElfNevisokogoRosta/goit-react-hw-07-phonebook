import React from "react";
import { Form } from "./components/Form/Form";
import { ContactList } from "./components/ContactList/ContactList";
import { Btn, Container, Title } from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import { resetContactBook } from "./redux/reducer";
import { ContactBookI } from "./redux/reducer";
export interface Contact {
  id: string;
  name: string;
  number: string;
}

const App: React.FC = () => {
  const dispatch = useDispatch();
  const reduxContacts = useSelector(
    (state: { contactBook: ContactBookI }) => state.contactBook.contact
  );
  const resetHandler = async (e: React.PointerEvent<HTMLButtonElement>) => {
    const result = await confirmReset();
    if (result) {
      dispatch(resetContactBook());
    }
  };

  const confirmReset = (): Promise<boolean> => {
    return new Promise((resolve) => {
      const result = window.confirm(
        `Are you sure you want to delete ${reduxContacts.length} contacts?`
      );
      resolve(result);
    });
  };

  return (
    <Container>
      <Title>Contact book</Title>
      <Form />
      <ContactList />
      {reduxContacts.length > 0 ? (
        <Btn onClick={resetHandler}>Reset all contact</Btn>
      ) : (
        ""
      )}
    </Container>
  );
};

export default App;
