import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Center } from './style';
import { CockflowBoxTitle } from '../../components/Cockflow/CockflowBoxTitle';

const TextBox = styled.textarea`
  width: 100%;
  padding: 16.5px 14px;
  border-color: rgba(0, 0, 0, 0.23);
  resize: none;
`;

// 댓글 박스
export const CockflowAddComment = () => {
  return (
    <form onSubmit={()=>{}}>
      <CockflowBoxTitle smallTitle="답글 달기" />
      <TextBox name="" id="" value="" placeholder='답글입력' onChange={() => { }}>
      </TextBox>
      <Center>
        <Button type="submit" variant="contained">등록하기</Button>
      </Center>
    </form>
  );
};
