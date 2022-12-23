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
import { User } from '../../../../types';

export const Header = ({ user }: { user: User | null }) => {
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
              'https://cocktailer.s3.ap-northeast-2.amazonaws.com/avatars/' +
              user?.avatarUrl
            }
          />
          <AvatarText>{user?.nickname}</AvatarText>
        </Avatar>
      </HeadingGrid>
      <HeadingRight>
        <Button
          size="small"
          variant="outlined"
          type="button"
          sx={{ width: 'max-content', marginBottom: '2px' }}
          onClick={() => navigate('/mypage/edit-avatar')}
        >
          아바타 변경
        </Button>
        <Button
          size="small"
          variant="outlined"
          type="button"
          sx={{ width: 'max-content' }}
          onClick={() => navigate('/mypage/edit-password')}
        >
          비밀번호 변경
        </Button>
      </HeadingRight>
    </Heading>
  );
};
