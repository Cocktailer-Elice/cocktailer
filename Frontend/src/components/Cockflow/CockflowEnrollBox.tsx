import styled from 'styled-components';

const InputBox = styled.input`
  width: 100%;
  padding: 16.5px 14px;
  border-color: rgba(0, 0, 0, 0.23);
  resize: none;
`

const TextBox = styled.textarea`
  width: 100%;
  padding: 16.5px 14px;
  border-color: rgba(0, 0, 0, 0.23);
  resize: none;
`


const CockflowEnrollBox = ({ actived = true }) => {
  return (
    <>
        <div>
          <InputBox type="text" value="" onChange={() => { }} readOnly={actived} placeholder="질문 제목을 입력해주세요"/> 
          <TextBox name="" id="" value="" onChange={() => {}} readOnly={actived} placeholder='질문 내용을 입력해주세요'></TextBox>
        </div>
    </>
  )
}

export default CockflowEnrollBox