// { ChangeEvent, FormEvent, FormEvent, KeyboardEvent, MouseEvent, useState }
import PropTypes from 'prop-types'
import Button from '@mui/material/Button';
import CockflowBoxTitle from '../../components/Cockflow/CockflowBoxTitle'

// 댓글 박스
const CockflowComment = () => {
  return (
    <>
      <CockflowBoxTitle />
      <div>
        <textarea name="" id="" value="입력된 댓글 내용" placeholder='' readOnly></textarea>
      </div>
      <Button variant="contained">채택하기</Button>
    </>
  )
}

CockflowComment.propTypes = {}

export default CockflowComment
