// { ChangeEvent, FormEvent, FormEvent, KeyboardEvent, MouseEvent, useState }
import PropTypes from 'prop-types'
import Button from '@mui/material/Button';
import CockflowBoxTitle from '../../components/Cockflow/CockflowBoxTitle'

// 댓글 박스
const CockflowAddComment = () => {
  return (
    <>
      <CockflowBoxTitle />
      <div>
        <textarea name="" id="" value="" placeholder='댓글입력' onChange={() => { }}></textarea>
      </div>
      <Button variant="contained">등록하기</Button>
    </>
  )
}

CockflowAddComment.propTypes = {}

export default CockflowAddComment
