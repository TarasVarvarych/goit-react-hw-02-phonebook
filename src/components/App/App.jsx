import { ContactForm } from '../PhoneBook/ContactForm/ContactForm';
import { Contacts } from '../PhoneBook/Contacts/Contacts';
import { Filter } from '../PhoneBook/Filter/Filter';
import { Container, HeroTitle, ContactsTitle } from './App.styled';

export function App() {
  return (
    <Container>
      <HeroTitle>PhoneBook</HeroTitle>
      <ContactForm />
      <Filter />
      <ContactsTitle>Contacts</ContactsTitle>
      <Contacts />
    </Container>
  );
}
