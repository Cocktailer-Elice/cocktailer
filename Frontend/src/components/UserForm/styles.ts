import styled from 'styled-components';
import { red, grey, green } from '@mui/material/colors';

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const UserForm = styled.form`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
`;

export const FormHeading = styled.h3`
  font-size: 1.3rem;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const LabelInputWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.7rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  label {
    text-transform: capitalize;
    font-size: 0.8rem;
  }
`;

export const BottomLineInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  padding-left: 0.5rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  font-size: 0.8rem;
  &:active {
    font-size: 0.8rem;
  }
  &::placeholder {
    font-size: 0.7rem;
  }
`;

export const BottomLineSelect = styled.select`
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  padding-left: 0.5rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
`;

export const ErrorWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 0.5rem;
`;

export const Alert = styled.div`
  font-size: 0.6rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${grey[700]};
  background-color: ${red[100]};
  &.success {
    background-color: ${green[200]};
  }
`;
