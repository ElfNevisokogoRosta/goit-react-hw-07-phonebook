import React from "react";
import { ContactElement } from "../ContactElement/ContactElement";
import { Contact } from "../../App";
import {
  Container,
  Filter,
  ContactContainer,
  FilterContainer,
} from "./ContactList.styled";
import { useSelector, useDispatch } from "react-redux";
import { ContactBookI } from "../../redux/reducer";
import { filterHandler as setFilter } from "../../redux/reducer";

export const ContactList: React.FC = () => {
  const dispatch = useDispatch();
  const contactBook = useSelector(
    (state: { contactBook: ContactBookI }) => state.contactBook
  );

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <Container>
      <FilterContainer>
        <Filter
          placeholder="Enter search query"
          type="text"
          name="filter"
          onChange={handleFilterChange}
        />
      </FilterContainer>

      {contactBook.contact.length > 0 ? (
        <ContactContainer>
          {contactBook.contact &&
            contactBook.contact
              .filter((contact) =>
                contact.name
                  .toLowerCase()
                  .includes(contactBook.filter.toLowerCase())
              )
              .map((contact: Contact) => (
                <ContactElement key={contact.id} contact={contact} />
              ))}
        </ContactContainer>
      ) : (
        <p className="alertData">Add some contacts</p>
      )}
    </Container>
  );
};
