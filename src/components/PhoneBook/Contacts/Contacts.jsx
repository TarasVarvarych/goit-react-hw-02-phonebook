import { useEffect } from 'react';
import { ContactList } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { fetchContacts } from 'redux/contactsAPI';
import { Contact } from './Contact';
export function Contacts() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactList>
      {filteredContacts.map(({ name, number, id }) => (
        <Contact name={name} number={number} id={id} key={id} />
      ))}
    </ContactList>
  );
}
