import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CockflowCreateReqDto } from '../../../../types/cockflowType';

interface GetData extends CockflowCreateReqDto {
  key: string,
  id: string,
}

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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: #fff;
  font-weight: light;
  word-break: keep-all;
  text-align: center;
  line-height: 1.5;
  font-size: 12px;
`;

const ImgWrap = styled.div`
  width: 120px;
  height: 125px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CockflowItemBox = ({ id, title, content }:GetData) => {
  return (
    <NavLink to={`/cockflow/detail/${id}`}>
      <Title>{title}</Title>
      <ImgWrap>
        <Img src={content} />
      </ImgWrap>
    </NavLink>
  );
};