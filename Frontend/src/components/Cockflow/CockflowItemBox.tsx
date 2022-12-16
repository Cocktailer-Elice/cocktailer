import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const CockflowItemBox = () => {
  return (
    <Link to='/cockflow/detail'>
      <span>이미지 제목들</span>
      <img />  
    </Link>

  )
}

CockflowItemBox.propTypes = {}

export default CockflowItemBox
