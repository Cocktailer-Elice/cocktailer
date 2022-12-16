import { useState } from 'react'
// { ChangeEvent, FormEvent, FormEvent, KeyboardEvent, MouseEvent, useState }
import PropTypes from 'prop-types'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const CockflowEnroll = () => {

  // 임시로 값 설정
  return (
    <>
        <div>
            <input type="text" placeholder='질문 제목을 입력해주세요' /> <br />    
            <textarea name="" id="" value="" placeholder='질문 내용을 입력해주세요' onChange={()=>{}}></textarea>
        </div>
        <div>
        {
          window.location.pathname === '/cockflow/new'
          ?
          <>  
            <Button variant="contained">등록하기</Button>
            &nbsp;&nbsp;
            <Link to='/cockflow'>
              <Button variant="outlined">취소하기</Button>
            </Link>
          </>
          : null
        }
        </div>
    </>
  )
}

CockflowEnroll.propTypes = {}

export default CockflowEnroll
