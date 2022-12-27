import Button from '@mui/material/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { CockflowMoreComment } from './CockflowMoreComment';
import { Adopted, FlexLeft, FlexRight, IconWrap } from './style';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

interface CommentType {
  item: String[],
}

export const CockflowCommentAdd = ({ item, cockflowId, commentId }: any) => {
  const { register, handleSubmit, reset } = useForm();
  console.log('item');
  console.log(item);
  const gets = async (data: any) => {
    await axios.post(`/api/cockflow/${cockflowId}/comments/${commentId}`, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (data: any) => {
    // alert(JSON.stringify(data));
    gets(data);
    reset();
    window.location.replace(`/cockflow/detail/${cockflowId}`);
  };

  const commAdopted = () => {
    axios.patch(`/api/cockflow/${cockflowId}/comments/${commentId}`)
      .then(function (response) {
        console.log(response);
        alert('채택하였습니다.');
      })
      .catch(function (error) {
        console.log(error);
        alert('이미 채택한 답이 있습니다.');
      });
  };

  const commDelete = async () => {
    await axios.delete(`api/cockflow/${cockflowId}/comments/${commentId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      })
  }

  const commEdit = () => {

  }

  const [subComment, setSubComment] = useState(false);
  const [moreComments, setMoreComments] = useState([]);
  const [isAdopt, setIsAdopt] = useState(false);

  useEffect(() => {
    if (item.subComments.length > 0) {
      const contArr = item.subComments.map((items: any) => items.content)
      setMoreComments(contArr)
      console.log(contArr)
    };
  }, [item]);

  return (
    <div key={item._id}>
      <Comment2
        value={item.content}
        onChange={() => { }}
        maxLength={250}
        readOnly={true}
      />
      <FlexLeft>
        {
          item.isAdopted && <Adopted>✨ 채택된 답변  </Adopted>
        }
        {item.owner.nickname}
      </FlexLeft>
      <FlexRight>
        <IconWrap type='button' onClick={commDelete}>
          <DeleteIc />
        </IconWrap>
        <IconWrap type='button' onClick={commEdit}>
          <EditIc />
        </IconWrap>
        <Button variant="outlined" onClick={() => {
          if (subComment) {
            setSubComment(false)
            return;
          };
          setSubComment(true)
          return;
        }}>댓글달기</Button>&nbsp;&nbsp;
        <Button variant="contained" onClick={commAdopted}>채택하기</Button>
      </FlexRight>
      {
        subComment
          ?
          <SubComments
            onSubmit={handleSubmit(onSubmit)}>
            <SubTextarea
              {...register("content")}
              maxLength={250}
              placeholder="대댓글을 입력해주세요"
            />
            <Button2
              type="submit"
              variant="contained">
              등록하기
            </Button2>
          </SubComments>
          : null
      }
      {
        moreComments.map((co, index) => <CockflowMoreComment content={co} key={index} />)
      }
    </div>
  );
};

const Comment2 = styled.textarea`
  display: block;
  width: 100%;
  height: 155px;
  margin: 0px auto;
  padding: 15px;
  line-height: 1.8;
  border: 1px solid #ddd;
  border-radius: 9px;
  resize: none;

  &:read-only {
    border: 1px solid #eee;
  }
`;

const SubComments = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 150px;
  margin: 0 auto;
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
`;

const SubTextarea = styled.textarea`
  position: relative;
  width: 70%;
  height: 110px;
  margin-right: 13px;
  padding: 16.5px 14px;
  border: none;
  resize: none;
  background: #fff;
  z-index: 1;
`;

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
`;

const DeleteIc = styled(DeleteIcon)`
  font-size: 18px;
`

const EditIc = styled(EditIcon)`
  font-size: 18px;
`