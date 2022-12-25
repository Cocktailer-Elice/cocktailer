import styled from 'styled-components';
import { useState } from 'react';
import { CockflowBadge } from '../../components/Cockflow/CockflowBadge';
import { Middle, FlexMiddle } from '../../components/Cockflow/style';

interface dataType {
  detailData: {
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
  const [inputActived, setInputActived] = useState(true);

  const { title, isBartender, nickname, createdAt, content } = detailData;

  return (
    <ContWrap>
      <form>
        <TitleWrap>
          <div>
            <ChangedInput type="text" value={title} readOnly={inputActived} />
          </div><br />
          <div>
            <FlexMiddle>
              <Middle>
                {isBartender
                  ? null
                  : <CockflowBadge /> // 임시로 표시를 반대로.
                }
                <div>&nbsp;{nickname}</div>
              </Middle>
              <span>
                {String(createdAt).split('T')[0].replaceAll('-', '.')}
              </span>
            </FlexMiddle>
          </div><br />
          <div>
            {/* <span>(+)조회수</span> */}
          </div>
        </TitleWrap>
        <TextBox defaultValue="" value={content} readOnly={inputActived} />
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
  }
`;
