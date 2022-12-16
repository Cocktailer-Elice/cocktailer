import Button from '@mui/material/Button';
import CockflowBoxTitle from '../../components/Cockflow/CockflowBoxTitle'

// 댓글 박스
const CockflowComment = () => {
  return (
    <>
      <CockflowBoxTitle replied={3} />
      <div>입력된 댓글 내용 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dicta nobis dolore suscipit itaque dolor!</div>
      <Button variant="contained">채택하기</Button>
    </>
  )
}

export default CockflowComment
