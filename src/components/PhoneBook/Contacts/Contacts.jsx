import {
  ContactList,
  DeleteButton,
  ContactItem,
  ContactName,
} from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
export function Contacts() {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactList>
      {filteredContacts.map(({ name, number, id }) => (
        <ContactItem key={id}>
          <ContactName>{name}</ContactName> : {number}
          <DeleteButton
            type="button"
            onClick={() => {
              handleDelete(id);
            }}
          >
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </ContactList>
  );
}
