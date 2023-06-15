import React from "react";
import { ContactElement } from "../ContactElement/ContactElement";

import {
  Container,
  Filter,
  ContactContainer,
  FilterContainer,
} from "./ContactList.styled";
import { useSelector, useDispatch } from "react-redux";
import { ContactBookI, ContactI } from "../../utils/interfase";
import { filterHandler as setFilter } from "../../redux/reducer";
import { Audio } from "react-loader-spinner";
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

      {contactBook.contacts && contactBook.contacts.length > 0 ? (
        <ContactContainer>
          {contactBook &&
            contactBook.contacts
              .filter((contact) =>
                contact.name
                  .toLowerCase()
                  .includes(contactBook.filter.toLowerCase())
              )
              .map((contact: ContactI) => (
                <ContactElement key={contact.id} contact={contact} />
              ))}
        </ContactContainer>
      ) : (
        <p className="alertData">Add some contacts</p>
      )}
      {contactBook.isLoading && (
        <Audio
          wrapperStyle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      )}
    </Container>
  );
};
