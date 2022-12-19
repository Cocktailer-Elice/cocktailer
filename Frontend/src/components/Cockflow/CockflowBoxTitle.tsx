import styled from 'styled-components';

const SmallTitle = styled.div`
  padding: 15px 0; 
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`

const CockflowBoxTitle = ({ replied = 0 }) => {
  return (
    <SmallTitle>
      {
        replied
        ?
        `${replied}개의 답변`
        :
        '답변 달기' 
      }
    </SmallTitle>
  )
}

export default CockflowBoxTitle
