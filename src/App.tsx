import React, { useEffect } from "react";
import { Form } from "./components/Form/Form";
import { ContactList } from "./components/ContactList/ContactList";
import { Container, Title } from "./App.styled";
import { fetchContacts } from "./redux/async.thunk";
import { useAppDispatch } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Contact book</Title>
      <Form />
      <ContactList />
      <ToastContainer />
    </Container>
  );
};

export default App;
