import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from '../../utils/useLocalStorage';
import { Contact } from '../../App';
import  {Formwraper, FormContainer, NameInput, NumberInput, Btn} from './Form.styled'
export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [contacts, setContacts] = useLocalStorage<Contact[]>('contacts', []);
  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const numberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };
  const formHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newContact: Contact = { id: uuidv4(), name, number };
    const isInAList= contacts.find(contact=>contact.name === newContact.name)
    if(isInAList){
      return(alert('This contact already in a list'))
    }
    setContacts([...contacts, newContact]);
    setName('');
    setNumber('');
  };

  return (
    <Formwraper onSubmit={formHandler}>
      <FormContainer>
        <NameInput value={name} type="text" name="name" onChange={nameHandler} required placeholder='Name'/>
        <NumberInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={numberHandler}
          placeholder='Phone number'
          value={number}
        />
        <Btn type="submit">Add contact</Btn>
      </FormContainer>
        
      </Formwraper>
  )
}
