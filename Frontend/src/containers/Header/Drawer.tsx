import styled from 'styled-components';

export const Drawer = () => {
  return <DrawerWrapper>Drawer</DrawerWrapper>;
};

const DrawerWrapper = styled.div`
  width: 300px;
  height: 100%;
  border: 1px solid black;
  background-color: gray;
  position: absolute;
  left: 0;
  top: 0;
`;
