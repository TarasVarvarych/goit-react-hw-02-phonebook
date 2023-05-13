// import { useState } from 'react';
import { ContactForm } from '../PhoneBook/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Contacts } from '../PhoneBook/Contacts/Contacts';
import { Filter } from '../PhoneBook/Filter/Filter';
import { Container, HeroTitle, ContactsTitle } from './App.styled';
// import { useLocalStorage } from 'hooks/useLocalStorage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/contactsSlice/contactsSlice';
import { setFilter } from 'redux/filterSlice/filterSlice';

const LS_CONTACTS_KEY = 'Contacts';
// const DEFAULT_CONTACTS = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export function App() {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem(LS_CONTACTS_KEY)) || [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ]
  // );
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem(LS_CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleContactSubmit = (newName, number) => {
    if (contacts.some(({ name }) => name === newName)) {
      window.alert(`${newName} is already in your contacts`);
      return;
    }
    dispatch(addContact({ name: newName, number, id: nanoid() }));
  };

  const handleFilterChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <Container>
      <HeroTitle>PhoneBook</HeroTitle>
      <ContactForm onSubmit={handleContactSubmit} />
      <Filter onChange={handleFilterChange} value={filter} />
      <ContactsTitle>Contacts</ContactsTitle>
      <Contacts contacts={filteredContacts} onDelete={handleDelete} />
    </Container>
  );
}
