import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { WITHDRAWAL } from '../../constants/api';

export const WithdrawlButton = () => {
  const navigate = useNavigate();
  const withdrawl = async () => {
    try {
      const response = await axios.delete(WITHDRAWAL);
      if (response) {
        alert('탈퇴되었습니다');
        navigate('/');
      }
    } catch (e: any) {
      console.log(e);
    }
  };
  return (
    <Button variant="outlined" type="button" onClick={withdrawl}>
      탈퇴하기
    </Button>
  );
};
