import Button from '@mui/material/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { CockflowCommentDepth } from './CockflowCommentDepth';
import { Adopted, FlexLeft, FlexRight, IconWrap } from '../Style/style';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { COCKFLOW_DETAIL, COCKFLOW_TWOID } from '../../../constants/api';
import { useAuthentication } from '../../../hooks/useAuthentication';
import { Comment } from '../../../../../types/commentType';
import { useCurrentUser } from '../../../hooks/useCurrentUser';
import { ownerDocument } from '@mui/material';

interface FormValue {
  content: string;
}

export const CockflowCommentPost = ({
  item,
  cockflowId,
  commentId,
  isAuthor,
}: any) => {
  const { register, handleSubmit, reset } = useForm<FormValue>();
  const [readonly, setReadonly] = useState(true);
  const [myComment, setMyComment] = useState(false);
  const [commentValue, setCommentValue] = useState(' ');
  const [subComment, setSubComment] = useState(false);
  const [moreComments, setMoreComments] = useState([]);

  const isLoggedIn = useAuthentication();
  const user = useCurrentUser();

  const repliedCommentsGets = async (data: FormValue) => {
    await axios.post(COCKFLOW_TWOID(cockflowId, commentId), data);
  };

  const repliedCommentsPuts = async () => {
    const data = {
      content: commentValue,
    };

    await axios
      .put(COCKFLOW_TWOID(cockflowId, commentId), data)
      .then(function (response) {
        alert('수정 되었습니다.');
        window.location.replace(`/cockflow/detail/${cockflowId}`);
      })
      .catch(function (error) {});
  };

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    repliedCommentsGets(data);
    reset();
    window.location.replace(`/cockflow/detail/${cockflowId}`);
  };

  const onCommentChange = (
    event: React.ChangeEventHandler<HTMLTextAreaElement> | any,
  ): void => {
    if (event) {
      setCommentValue(event.currentTarget.value);
    }
  };

  const commAdopted = () => {
    axios
      .patch(COCKFLOW_TWOID(cockflowId, commentId))
      .then(function (response) {
        alert('채택하였습니다.');
        window.location.replace(`/cockflow/detail/${cockflowId}`);
      })
      .catch(function (error) {});
  };

  const commDelete = async () => {
    if (confirm('댓글을 삭제하시겠습니까?')) {
      await axios
        .delete(COCKFLOW_TWOID(cockflowId, commentId))
        .then((response) => {
          alert('삭제 완료 되었습니다.');
          window.location.replace(`/cockflow/detail/${cockflowId}`);
        })
        .catch((response) => {});
    }
  };

  const commEdit = () => {
    setReadonly((prev) => !prev);
  };

  useEffect(() => {
    if (item.subComments.length > 0) {
      const contArr = item.subComments.map((items: Comment) => items.content);
      setMoreComments(contArr);
    }
    setCommentValue(item.content);

    if (user && user.id === item.owner.id) {
      setMyComment(true);
    }
  }, [item]);

  return (
    <div key={item._id}>
      <Comment2
        value={commentValue}
        onChange={onCommentChange}
        maxLength={250}
        readOnly={readonly}
      />
      <FlexLeft>
        {item.isAdopted && <Adopted>✨ 채택된 답변 </Adopted>}
        {item.owner.nickname}
      </FlexLeft>

      {!readonly ? (
        <FlexRight>
          <Button variant="contained" onClick={() => repliedCommentsPuts()}>
            수정완료
          </Button>
          &nbsp;&nbsp;
          <Button
            variant="outlined"
            onClick={() => {
              setReadonly((prev) => !prev);
            }}
          >
            취소하기
          </Button>
        </FlexRight>
      ) : (
        <FlexRight>
          &nbsp;&nbsp;
          {myComment && (
            <>
              <IconWrap type="button" onClick={commDelete}>
                <DeleteIc />
              </IconWrap>
              <IconWrap type="button" onClick={commEdit}>
                <EditIc />
              </IconWrap>
            </>
          )}
          {isLoggedIn && (
            <Button
              variant="outlined"
              onClick={() => {
                if (subComment) {
                  setSubComment(false);
                  return;
                }
                setSubComment(true);
                return;
              }}
            >
              댓글달기
            </Button>
          )}
          {isAuthor && !item.isAdopted && (
            <>
              &nbsp;&nbsp;
              <Button variant="contained" onClick={commAdopted}>
                채택하기
              </Button>
            </>
          )}
        </FlexRight>
      )}

      {subComment && readonly ? (
        <SubComments onSubmit={handleSubmit(onSubmit)}>
          <SubTextarea
            {...register('content')}
            maxLength={250}
            placeholder="대댓글을 입력해주세요"
          />
          <Button2 type="submit" variant="contained">
            등록하기
          </Button2>
        </SubComments>
      ) : null}
      {moreComments.map((co, index) => (
        <CockflowCommentDepth content={co} key={index} />
      ))}
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
  margin: 20px auto;

  &::before {
    display: block;
    content: '';
    top: -11px;
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
`;

const EditIc = styled(EditIcon)`
  font-size: 18px;
`;
