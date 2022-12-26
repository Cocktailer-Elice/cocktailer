import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { CockflowBadge } from '../../components/Cockflow/CockflowBadge';
import { Middle, FlexMiddle } from '../../components/Cockflow/style';
import { trimDate } from './CockflowUtils';
import { CockflowEnrollBtns } from './CockflowEnrollBtns';
import axios from 'axios';

interface dataType {
  detailData: {
    _id: number,
    id: number,
    title: string,
    isBartender: boolean,
    nickname: string,
    createdAt: Date,
    content: string
  };
};

export const CockflowDetailBox = ({ detailData }: dataType) => {
  // 수정 기능 붙으면 - 전역으로 관리 
  console.log(detailData)
  console.log(detailData._id)
  const [inputUnActived, setinputUnActived] = useState(true);

  const { title, isBartender, nickname, createdAt, content } = detailData;

  return (
    <ContWrap>
      <form>
        <TitleWrap>
          <div>
            <ChangedInput type="text" value={title} readOnly={inputUnActived} />
          </div>
          <FlexMiddle>
            <Middle>
              {isBartender && <CockflowBadge />}{nickname} &nbsp;
            </Middle>
            <div>
              <span>
                {trimDate(createdAt)}
              </span>
            </div>
          </FlexMiddle>
          <div>
            {/* <span>(+)조회수</span> */}
          </div>
        </TitleWrap>
        <TextBox defaultValue="" value={content} readOnly={inputUnActived} />
        {!inputUnActived && <CockflowEnrollBtns type="enroll" linkto={`/cockflow`} />}
        {inputUnActived && <CockflowEnrollBtns type="edit" linkto={`/cockflow`} pageId={detailData._id} />}
      </form>
    </ContWrap>
  );
};

const ContWrap = styled.div`
  // border: 1px solid #ddd;
  border-radius: 7px;
  overflow: hidden;
  color: #555;
`;

const TitleWrap = styled.div`
  width: 100%;
  padding: 0px 15px;
  border: none;
  border-bottom: 1px solid #ddd;
  font-size: 13px;
`;

const TextBox = styled.textarea`
  width: 100%;
  padding: 10.5px 15px;
  border: none;
  resize: none;
  height: 190px;
  line-height: 1.6;
`;

const ChangedInput = styled.input`
  display: block;
  width: 100%;
  padding: 16.5px 15px;
  border: none;
  border-bottom: 1px solid #ddd;
  resize: none;

  &:read-only {
  padding: 5px 0px;
    border: none;
    color: #555;  
    font-size: 17px;
    font-weight: bold;
  }
`;
