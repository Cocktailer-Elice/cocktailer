import PropTypes from 'prop-types'
import CockflowHeader from '../../components/Cockflow/CockflowHeader'
import CockflowBackBtn from '../../components/Cockflow/CockflowBackBtn'
import CockflowEnrollBox from '../../components/Cockflow/CockflowEnrollBox'

const CockflowEnroll = () => {
  return (
    <>
        <CockflowHeader />
        <CockflowBackBtn />
        <CockflowEnrollBox />
    </>
  )
}

CockflowEnroll.propTypes = {}

export default CockflowEnroll
