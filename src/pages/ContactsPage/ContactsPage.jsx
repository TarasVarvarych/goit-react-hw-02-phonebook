import { ContactForm } from 'components/PhoneBook/ContactForm/ContactForm';
import { Contacts } from 'components/PhoneBook/Contacts/Contacts';
import { Filter } from 'components/PhoneBook/Filter/Filter';
import { ContactsTitle } from './ContactsPage.styled';

function ContactsPage() {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactsTitle>Contacts</ContactsTitle>
      <Contacts />
    </>
  );
}

export default ContactsPage;
