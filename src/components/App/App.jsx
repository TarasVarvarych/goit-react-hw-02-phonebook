import { useState, useEffect } from 'react';
import { ContactForm } from '../PhoneBook/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Contacts } from '../PhoneBook/Contacts/Contacts';
import { Filter } from '../PhoneBook/Filter/Filter';
import { Container, HeroTitle, ContactsTitle } from './App.styled';
const LS_CONTACTS_KEY = 'Contacts';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LS_CONTACTS_KEY)) || [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleContactSubmit = (newName, number) => {
    if (contacts.some(({ name }) => name === newName)) {
      window.alert(`${newName} is already in your contacts`);
      return;
    }
    setContacts(prevContacts => [
      { id: nanoid(), name: newName, number },
      ...prevContacts,
    ]);
  };

  const handleFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const handleDelete = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
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
