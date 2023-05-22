import React from 'react';
import { Form } from './components/Form/Form';
import { ContactList } from './components/ContactList/ContactList';
import { useLocalStorage } from 'usehooks-ts';
import {Btn, Container, Title} from './App.styled'
export interface Contact {
  id: string;
  name: string;
  number: string;
}
const App: React.FC = () => {
  const [contacts, setContacts] =useLocalStorage('contacts', [])
  const resetHandler = async (e: React.PointerEvent<HTMLButtonElement>) => {
    const result = await confirmReset();
    if (result) {
      setContacts([]);
    }
  };

  const confirmReset = (): Promise<boolean> => {
    return new Promise((resolve) => {
      const result = window.confirm(`Are you sure you want to delete ${contacts.length} contacts?`);
      resolve(result);
    });
  };
  return (
    <Container>
      <Title>Contact book</Title>
     <Form/>
      <ContactList/>
     {contacts.length >0? (<Btn onClick={resetHandler}>Reset all contact</Btn>): ('')} 
    </Container>
  );
};

export default App;
