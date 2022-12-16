import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ImgWrap = styled.div`
  width: 150px;
  height: 150px;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const CockflowItemBox = ({imgSrc = 'https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_960_720.jpg'}) => {
  return (
    <Link to='/cockflow/detail'>
      <span>이미지 제목들</span>
      <ImgWrap>
        <Img src={imgSrc}/>  
      </ImgWrap>
    </Link>

  )
}

CockflowItemBox.propTypes = {}

export default CockflowItemBox
