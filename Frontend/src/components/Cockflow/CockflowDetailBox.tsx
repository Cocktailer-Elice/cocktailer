import styled from 'styled-components';
import { ChangeEvent, useEffect, useState } from 'react';
import { CockflowBadge } from '../../components/Cockflow/CockflowBadge';
import { Middle, FlexRight } from '../../components/Cockflow/style';
import { trimDate } from './CockflowUtils';
import { CockflowEnrollBtns } from './CockflowEnrollBtns';
import axios from 'axios';
import { useAuthentication } from '../../hooks/useAuthentication';

interface dataType {
  detailData: {
    _id: number,
    id: number,
    title: string,
    isBartender: boolean,
    nickname: string,
    createdAt: Date,
    content: string,
  };
  isAuthor: boolean,
};

export const CockflowDetailBox = ({ detailData, isAuthor }: dataType) => {
  const [inputUnActived, setinputUnActived] = useState(true);
  const { title, isBartender, nickname, createdAt, content } = { ...detailData };

  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const isLoggedIn = useAuthentication();

  useEffect(() => {
    setNewTitle(title);
    setNewContent(content);
  }, [title, content]);

  const editFn = () => {
    setinputUnActived(() => !inputUnActived);
  };

  const updateAxios = async () => {
    const copiedData = {
      title: newTitle,
      content: newContent
    }

    await axios.put(`/api/cockflow/${detailData._id}`, copiedData)
      .then(() => {
        alert('수정되었습니다.');
        window.location.replace(`/cockflow/detail/${detailData._id}`);
      }).catch(() => alert('권한이 없습니다.'))
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value);
  };

  const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewContent(e.currentTarget.value);
  }

  return (
    <ContWrap>
      <form>
        <TitleWrap>
          <div>
            <ChangedInput
              type="text"
              value={newTitle}
              onChange={handleInput}
              readOnly={inputUnActived}
            />
          </div>
          <FlexRight>
            <Middle>
              {isBartender && <CockflowBadge />}{nickname} &nbsp;
            </Middle>
            <div>
              <span>
                {trimDate(createdAt)}
              </span>
            </div>
          </FlexRight>
        </TitleWrap>
        <TextBox
          defaultValue=""
          value={newContent}
          onChange={handleTextArea}
          readOnly={inputUnActived}
        />
        {
          (isLoggedIn && isAuthor) && (
            inputUnActived
              ? (<CockflowEnrollBtns
                typeBtn="edit"
                linkto={`/cockflow`}
                pageId={detailData._id}
                editFn={editFn}
              />)
              : (<CockflowEnrollBtns
                typeBtn="button"
                pageId={detailData._id}
                linkto={`/cockflow`}
                editFn={editFn}
                updateAxios={updateAxios}
              />)
          )
        }
      </form>
    </ContWrap>
  );
};

const ContWrap = styled.div`
  border-radius: 9px;
  overflow: hidden;
  color: #555;
  border: 1px solid #ddd;
  padding: 18px 15px;
`;

const TitleWrap = styled.div`
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  font-size: 13px;
`;

const TextBox = styled.textarea`
  display: block;
  width: 99%;
  margin: 10px auto;
  padding: 10.5px 15px;
  border: none;
  resize: none;
  height: 190px;
  line-height: 1.6;

  &:not(:read-only){
    border: 1px solid #ccc;
  }
`;

const ChangedInput = styled.input`
  display: block;
  width: 100%;
  padding: 16.5px 15px;
  border: 1px solid #ddd;
  resize: none;
  padding: 6px 12px;
  color: #555;  
  font-size: 17px;
  font-weight: bold;

  &:read-only {
    border: none;
  }
`;
