import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
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

export const CockflowItemBox = ({ imgSrc = 'https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_960_720.jpg' }) => {
  return (
    <NavLink to='/cockflow/detail'>
      <Title>이미지 제목들</Title>
      <ImgWrap>
        <Img src={imgSrc} />
      </ImgWrap>
    </NavLink>
  );
};