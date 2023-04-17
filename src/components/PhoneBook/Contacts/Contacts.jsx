import PropTypes from 'prop-types';
import {
  ContactList,
  DeleteButton,
  ContactItem,
  ContactName,
} from './Contacts.styled';
export function Contacts({ contacts, onDelete }) {
  return (
    <ContactList>
      {contacts.map(({ name, number, id }) => (
        <ContactItem key={id}>
          <ContactName>{name}</ContactName> : {number}
          <DeleteButton
            type="button"
            onClick={() => {
              onDelete(id);
            }}
          >
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </ContactList>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};
