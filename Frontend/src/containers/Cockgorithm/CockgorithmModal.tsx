import styled from 'styled-components';

interface CockgorithmModalProps {
  toggleModal: () => void;
}

export const CockgorithmModal = ({ toggleModal }: CockgorithmModalProps) => {
  return (
    <>
      <Dimmed onClick={toggleModal} />
      <Modal>
        <MainSection></MainSection>
        <CloseButton onClick={toggleModal} />
      </Modal>
    </>
  );
};

const Modal = styled.div`
  width: 450px;
  min-height: 60%;
  position: fixed;
  top: 20%;
  padding: 30px;
  z-index: 11;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
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

const MainSection = styled.div`
  width: 100%;
  min-height: 450px;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const CloseButton = styled.div`
  width: 30px;
  height: 30px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
`;
