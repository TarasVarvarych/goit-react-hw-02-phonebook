import { Component } from 'react';
import { ContactForm } from '../PhoneBook/ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Contacts } from '../PhoneBook/Contacts/Contacts';
import { Filter } from '../PhoneBook/Filter/Filter';
import { Container, HeroTitle, ContactsTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleContactSubmit = (newName, number) => {
    if (this.state.contacts.some(({ name }) => name === newName)) {
      window.alert(`${newName} is already in your contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [
        { id: nanoid(), name: newName, number },
        ...prevState.contacts,
      ],
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  hendleDelete = id => {
    console.log(id);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <Container>
        <HeroTitle>PhoneBook</HeroTitle>
        <ContactForm onSubmit={this.handleContactSubmit} />
        <Filter onChange={this.handleFilterChange} value={filter} />
        <ContactsTitle>Contacts</ContactsTitle>
        <Contacts contacts={filteredContacts} onDelete={this.hendleDelete} />
      </Container>
    );
  }
}
