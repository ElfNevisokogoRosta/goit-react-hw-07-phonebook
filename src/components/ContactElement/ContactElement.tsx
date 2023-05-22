import React from 'react'
import useLocalStorage from '../../utils/useLocalStorage'
import { Contact } from '../../App'
import {Container, DataContainer, NumberContainer, Btn} from './ContactElement.styled'
interface ContactElementProps{
  contact:{id:string,
    name: string,
    number: string,}
  
}

export const ContactElement: React.FC<ContactElementProps> = ({contact}) => {
  const [contacts, setContacts] = useLocalStorage<Contact[]>('contacts', []);
  const deletContactHandler = (e: React.PointerEvent<HTMLButtonElement>)=>{
    setContacts([...contacts.filter(contact=>contact.id!==e.currentTarget.id)])
  }
  return (
    
    <Container key={contact.id}>
      <DataContainer><NumberContainer>{contact.name}:</NumberContainer> <NumberContainer>{contact.number}</NumberContainer></DataContainer>
    
    <Btn id={contact.id} onClick={deletContactHandler}>delete</Btn>
  </Container>
  )
}
