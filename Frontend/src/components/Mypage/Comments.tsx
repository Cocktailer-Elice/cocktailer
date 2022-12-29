import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface CommentsProps {
  data?: {
    cockflowId: string;
    content: string;
    parentCommentId: string;
  }[];
}

export const Comments = ({ data }: CommentsProps) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      {data?.map(({ cockflowId, content, parentCommentId }) => {
        return (
          <ItemWrapper
            key={parentCommentId}
            onClick={() => navigate(`/cockflow/detail/${cockflowId}`)}
          >
            <Content>{content}</Content>
          </ItemWrapper>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
`;
const ItemWrapper = styled.div`
  cursor: pointer;
`;
const Content = styled.div`
  font-size: 0.9rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 0.7rem;
`;
