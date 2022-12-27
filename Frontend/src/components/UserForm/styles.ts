import styled from 'styled-components';
import { red, grey } from '@mui/material/colors';

export const UserForm = styled.form`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

export const FormHeading = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-top: 1rem;
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
    font-weight: 600;
    font-size: 0.9rem;
  }
`;

export const BottomLineInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  padding-left: 0.5rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  font-size: 0.9rem;
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
  color: ${grey[800]};
  background-color: ${red[100]};
`;
