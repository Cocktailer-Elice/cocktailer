import PropTypes from 'prop-types'
import CockflowHeader from '../../components/Cockflow/CockflowHeader'
import CockflowBackBtn from '../../components/Cockflow/CockflowBackBtn'
import CockflowEnrollBox from '../../components/Cockflow/CockflowEnrollBox'
import CockflowAddComment from '../../components/Cockflow/CockflowAddComment'
import CockflowCommentBox from '../../components/Cockflow/CockflowCommentBox'

const CockflowComment = () => {
  return (
    <>
      <CockflowHeader />
      <CockflowBackBtn />
      <CockflowEnrollBox />
      <br/>
      <CockflowAddComment />
      <CockflowCommentBox />
    </>
  )
}

CockflowComment.propTypes = {}

export default CockflowComment
