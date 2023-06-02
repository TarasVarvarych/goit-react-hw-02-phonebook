import styled from 'styled-components';

export const ErrorText = styled.p`
  font-size: 30px;
  margin-bottom: 40px;
`;

export const BackToHomeBtn = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: black;
  color: white;
  font-weight: 700;
  margin-top: 15px;
  &:hover {
    background-color: #7da2a9;
    color: black;
    scale: 1.05;
  }
`;
