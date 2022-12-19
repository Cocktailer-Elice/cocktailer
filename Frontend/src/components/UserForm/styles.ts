import styled from 'styled-components';

export const UserForm = styled.form`
  padding: 1rem;
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
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  label {
    text-transform: capitalize;
    &::after {
      content: ' : ';
    }
  }
`;

export const BottomLineInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  padding-left: 0.5rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
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
  min-height: 32px;
`;
