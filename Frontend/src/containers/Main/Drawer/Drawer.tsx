import styled from 'styled-components';

export const Drawer = () => {
  return (
    <DrawerWrapper>
      <DrawerUserSectionWrapper />
      <DrawerPageSectionWrapper />
    </DrawerWrapper>
  );
};

const DrawerWrapper = styled.div`
  width: 300px;
  height: 100%;
  border: 1px solid gray;
  position: absolute;
  left: 0;
  top: 0;
`;

const DrawerUserSectionWrapper = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid gray;
  background-color: white;
`;

const DrawerPageSectionWrapper = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  border: 1px solid gray;
  background-color: white;
`;
