import styled from 'styled-components';
import Button from '@mui/material/Button';
import CockflowBoxTitle from '../../components/Cockflow/CockflowBoxTitle'
import { Right } from '../../components/Cockflow/CockflowStyle'

const Comment = styled.div`
  padding: 15px;
  line-height: 1.8;
`

// 댓글 박스
const CockflowComment = () => {
  return (
    <>
      <CockflowBoxTitle replied={3} />
      <Comment>
        입력된 댓글 내용 Lorem ipsum dolor
        sit amet consectetur adipisicing elit.
        Dignissimos dicta nobis dolore suscipit itaque dolor!
      </Comment>
      <Right>
        <Button variant="contained">채택하기</Button>
      </Right>
    </>
  )
}

export default CockflowComment
