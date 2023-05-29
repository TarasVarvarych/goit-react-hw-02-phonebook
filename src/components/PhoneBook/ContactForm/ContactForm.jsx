import { useState } from 'react';
import {
  ContactFormEl,
  FormLabel,
  FormInput,
  AddContactBtn,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsAPI';

export function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [contactName, setContactName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.some(({ name }) => name === contactName)) {
      window.alert(`${contactName} is already in your contacts`);
      return;
    }
    dispatch(
      addContact({
        name: contactName,
        number,
      })
    );

    setContactName('');
    setNumber('');
    e.target.reset();
  };

  const handleInputChange = e => {
    const { name } = e.target;
    switch (name) {
      case 'name':
        setContactName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <ContactFormEl onSubmit={handleSubmit}>
      <FormLabel htmlFor="">
        Name
        <FormInput
          onChange={handleInputChange}
          type="text"
          name="name"
          value={contactName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel>
        {' '}
        Phone
        <FormInput
          onChange={handleInputChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </ContactFormEl>
  );
}
