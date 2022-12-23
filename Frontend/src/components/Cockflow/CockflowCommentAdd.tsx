import Button from '@mui/material/Button';
import { useState } from 'react';
import styled from 'styled-components';
import { P15B1, Right } from './style';

const postAdopted = () => {

}

export const CockflowCommentAdd = ( { item }:any) => {
    const [subComment, setSubComment] = useState(false)

    return (
        <P15B1 key="추가하기ㅣㅣ">
            <Comment2>
            {item.content}
            </Comment2>
            <Right>
            <Button variant="outlined" onClick={() => {
                if (subComment) {
                setSubComment(false)
                return;
                }
                setSubComment(true)
                return;
            }}>댓글달기</Button>&nbsp;&nbsp;
            <Button variant="contained" onClick={postAdopted}>채택하기</Button>
            </Right>
            {
            subComment
                ?
                <>
                  <SubComments>
                    <SubTextarea name="" value="test test" onChange={()=>{}} />
                    <Button2 variant="contained">등록하기</Button2>
                  </SubComments>
                </>
                : null
            }
        </P15B1>
    )
}

const Comment2 = styled.div`
  padding: 15px;
  line-height: 1.8;
`;

const SubComments = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  &::before {
    display: block;
    content: '';
    top: -11PX;
    right: 98px;
    position: absolute;
    width: 0px;
    height: 0px;
    border-bottom: 13px solid #ddd;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    z-index: 1;
  }
  &::after {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background: #ddd;
    border-radius: 10px;
  }
`

const SubTextarea = styled.textarea`
  position: relative;
  width: 75%;
  height: 90px;
  margin-right: 13px;
  padding: 16.5px 14px;
  border: none;
  resize: none;
  background: #fff;
  z-index: 1;
`

const Button2 = styled(Button)`
  position: relative;
  z-index: 1;
  padding: 2px 4px;
  font-size: 12px;
  background: #fff;
  color: #555;
  font-weight: bold;
  &:hover {
    background: #7b7b7b;
    color: #fff;
  }
`
