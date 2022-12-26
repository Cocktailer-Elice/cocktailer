import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CockflowCreateReqDto } from '../../../../types/cockflowType';

interface GetData extends CockflowCreateReqDto {
  key: string,
  id: string,
};

export const CockflowItemBox = ({ id, title, content }: GetData) => {
  return (
    <NavLink to={`/cockflow/detail/${id}`}>
      <Title>{title}</Title>
      <ImgWrap>
        <Img src={content} />
      </ImgWrap>
    </NavLink>
  );
};

const NavLink = styled(Link)`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 1px 4px 5px #7d7d7d;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);  
  }
`;

const Title = styled.div`
  position: absolute;
  width: 5rem;
  font-size: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: #fff;
  text-align: center;
  line-height: 1.5;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 140px;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
