import styled from 'styled-components';

interface CockgorithmModalProps {
  toggleModal: () => void;
}

export const CockgorithmModal = ({ toggleModal }: CockgorithmModalProps) => {
  return (
    <>
      <Dimmed onClick={toggleModal} />
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
  padding: 20px;
  z-index: 1;
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
