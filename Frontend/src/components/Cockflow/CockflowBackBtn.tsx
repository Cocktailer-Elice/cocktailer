import PropTypes from 'prop-types'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const CockflowBackBtn = () => {
  return (
    <>
      <Link to='/cockflow'>
        <Button variant="contained">목록</Button>
      </Link>
    </>
  )
}

CockflowBackBtn.propTypes = {}

export default CockflowBackBtn
