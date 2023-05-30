import { ContactForm } from 'components/PhoneBook/ContactForm/ContactForm';
import { Contacts } from 'components/PhoneBook/Contacts/Contacts';
import { Filter } from 'components/PhoneBook/Filter/Filter';
import styled from 'styled-components';

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

const ContactsTitle = styled.h2`
  letter-spacing: 0.4rem;
  font-family: serif;
`;

export default ContactsPage;
