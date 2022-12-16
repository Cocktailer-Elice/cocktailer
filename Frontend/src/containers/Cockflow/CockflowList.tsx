import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import CockflowHeader from '../../components/Cockflow/CockflowHeader'
import CockflowItemBox from '../../components/Cockflow/CockflowItemBox'

const CockflowList = () => {
  return (
    <>
      <CockflowHeader />
      <Link to='/cockflow/new'>질문하기</Link>
      <ul>
        <li><CockflowItemBox/></li>
        <li><CockflowItemBox/></li>
        <li><CockflowItemBox/></li>
        <li><CockflowItemBox/></li>
      </ul>
    </>
  )
}

CockflowList.propTypes = {}

export default CockflowList
