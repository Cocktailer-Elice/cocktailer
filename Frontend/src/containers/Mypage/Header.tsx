import { Button } from '@mui/material';
import {
  Avatar,
  AvatarImage,
  AvatarText,
  Heading,
  HeadingLeft,
  HeadingGrid,
  HeadingRight,
} from '../../components/Mypage/style';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Heading>
      <HeadingLeft>
        <Button
          size="small"
          variant="outlined"
          type="button"
          sx={{ width: 'max-content' }}
          onClick={() => navigate('/bartender-apply')}
        >
          바텐더 인증 신청
        </Button>
      </HeadingLeft>
      <HeadingGrid>
        <Avatar>
          <AvatarImage
            src={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/15-09-26-RalfR-WLC-0084.jpg/250px-15-09-26-RalfR-WLC-0084.jpg'
            }
          />
          <AvatarText>진 # 2212</AvatarText>
        </Avatar>
      </HeadingGrid>
      <HeadingRight>
        <Button
          size="small"
          variant="outlined"
          type="button"
          sx={{ width: 'max-content', marginBottom: '2px' }}
          onClick={() => navigate('/mypage/edit')}
        >
          개인정보 수정
        </Button>
        <Button
          size="small"
          variant="outlined"
          type="button"
          sx={{ width: 'max-content' }}
          onClick={() => navigate('/mypage/password-edit')}
        >
          비밀번호 변경
        </Button>
      </HeadingRight>
    </Heading>
  );
};
