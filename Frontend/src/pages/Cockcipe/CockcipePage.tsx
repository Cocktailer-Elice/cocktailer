import React from 'react';
import styled from 'styled-components';
import ApplyContainer from '../../containers/Cockcipe/ApplyContainer';
import InputContainer from '../../containers/Cockcipe/InputContainer';
import ListContainer from '../../containers/Cockcipe/ListContainer';

const Wrapper = styled.div`
  width: 480px;
  height: auto;
  margin: 0 auto;
  border: 1px solid black;
  padding: 10px;
`;

const CockcipePage = () => {
  return (
    <Wrapper>
      <InputContainer />
      <ListContainer />
      <ApplyContainer />
    </Wrapper>
  );
};

export default CockcipePage;
