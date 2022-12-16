import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Right = styled.div`
  text-align: right;
  padding: 15px;
`

const CockflowBackBtn = () => {
  return (
    <Right>
      {
        window.location.pathname == `/cockflow`
        ? (<Link to='/cockflow/new'>
           <Button variant="contained">질문하기</Button>
          </Link>)
        : (<Link to='/cockflow'>
            <Button variant="contained">목록</Button>
          </Link>)
      }
    </Right>
  )
}

export default CockflowBackBtn
