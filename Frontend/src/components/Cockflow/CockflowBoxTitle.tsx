import styled from 'styled-components';

const SmallTitle = styled.div`
  padding: 15px 0; 
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`;

interface title {
  replied?: number,
  smallTitle?: string
};

export const CockflowBoxTitle = ({ replied = 0, smallTitle }: title) => {
  return (
    <SmallTitle>
      {
        replied
          ?
          `${replied}개의 답변`
          :
          smallTitle
      }
    </SmallTitle>
  );
};
