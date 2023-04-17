import styled from 'styled-components';
export const ContactList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: black;
  color: white;
  font-weight: 700;
  margin-left: 15px;
  &:hover {
    background-color: red;
    scale: 1.05;
  }
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactName = styled.span`
  font-size: 24px;
  font-weight: 500;
`;
