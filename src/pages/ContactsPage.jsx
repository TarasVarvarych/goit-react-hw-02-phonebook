import { ContactsTitle, HeroTitle } from 'components/App/App.styled';
import { ContactForm } from 'components/PhoneBook/ContactForm/ContactForm';
import { Contacts } from 'components/PhoneBook/Contacts/Contacts';
import { Filter } from 'components/PhoneBook/Filter/Filter';

function ContactsPage() {
  return (
    <>
      <HeroTitle>PhoneBook</HeroTitle>
      <ContactForm />
      <Filter />
      <ContactsTitle>Contacts</ContactsTitle>
      <Contacts />
    </>
  );
}

export default ContactsPage;
