import { ContactForm } from '../PhoneBook/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Contacts } from '../PhoneBook/Contacts/Contacts';
import { Filter } from '../PhoneBook/Filter/Filter';
import { Container, HeroTitle, ContactsTitle } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/contactsSlice/contactsSlice';
import { setFilter } from 'redux/filterSlice/filterSlice';

// const LS_CONTACTS_KEY = 'Contacts';

export function App() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

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
