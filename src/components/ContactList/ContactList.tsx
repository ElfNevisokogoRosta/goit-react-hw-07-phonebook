import React, {useState} from 'react'
import useLocalStorage from '../../utils/useLocalStorage'
import { ContactElement } from '../ContactElement/ContactElement';
import { Contact } from '../../App';
import {Container, Filter, ContactContainer, FilterContainer} from './ContactList.styled'
export const ContactList: React.FC= () => {
  const [contacts] = useLocalStorage<Contact[]>('contacts', []);
  const [filter, setFilter] = useState('');
  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  return (
    <Container>
      <FilterContainer>
        <Filter placeholder='Enter serach query' type="text" name="filter" onChange={filterHandler} />
      </FilterContainer>
        
        {contacts.length>0 ? (<ContactContainer>
          {contacts &&
            contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase())).map((contact: Contact) => (
              <ContactElement key={contact.id} contact={contact}/>             
            ))}
        </ContactContainer>):(<p className='alertData'>Add some contacts</p>)}
      </Container>
  )
}
