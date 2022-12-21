import styled from 'styled-components';

export const CockgorithmModal = () => {
  return (
    <>
      <Dimmed />
      <Modal></Modal>
    </>
  );
};

const Modal = styled.div`
  width: 450px;
  min-height: 60%;
  background-color: yellow;
  position: fixed;
  top: 20%;
`;

const Dimmed = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
`;
