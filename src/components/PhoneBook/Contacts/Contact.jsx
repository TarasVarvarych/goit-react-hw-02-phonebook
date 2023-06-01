import { useState } from 'react';
import PropTypes from 'prop-types';

import {
  ChangeButton,
  ContactInput,
  ContactItem,
  ContactName,
  DeleteButton,
} from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from 'redux/contactsAPI';

export function Contact({ name, number, id }) {
  const [isEdit, setIsEdit] = useState(false);
  const [contactName, setContactName] = useState(name);
  const [phoneNumber, setPhoneNumber] = useState(number);
  const [targetId, setTargetId] = useState(null);
  const dispatch = useDispatch();

  const handleEditContact = id => {
    setIsEdit(prevState => !prevState);
    setTargetId(id);
    if (isEdit) {
      dispatch(updateContact({ name: contactName, number: phoneNumber, id }));
    }
  };
  const handleChangeContact = e => {
    const { name } = e.target;
    switch (name) {
      case 'name':
        setContactName(e.target.value);
        break;
      case 'number':
        setPhoneNumber(e.target.value);
        break;
      default:
        return;
    }
  };
  return (
    <ContactItem>
      {isEdit && id === targetId ? (
        <>
          <ContactInput
            type="text"
            name="name"
            onChange={handleChangeContact}
            value={contactName}
          />
          <ContactInput
            type="number"
            name="number"
            onChange={handleChangeContact}
            value={phoneNumber}
          />
        </>
      ) : (
        <>
          <ContactName>{name}</ContactName> : {number}
        </>
      )}

      <ChangeButton type="button" onClick={() => handleEditContact(id)}>
        {isEdit ? 'Save' : 'Edit'}{' '}
      </ChangeButton>
      <DeleteButton
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </DeleteButton>
    </ContactItem>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
