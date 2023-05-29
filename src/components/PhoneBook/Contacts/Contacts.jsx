import { useEffect } from 'react';
import {
  ContactList,
  DeleteButton,
  ContactItem,
  ContactName,
} from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/contactsAPI';
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
        <ContactItem key={id}>
          <ContactName>{name}</ContactName> : {number}
          <DeleteButton
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </ContactList>
  );
}
