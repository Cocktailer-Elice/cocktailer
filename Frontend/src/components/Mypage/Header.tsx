import { Button } from '@mui/material';
import {
  Avatar,
  AvatarImage,
  AvatarText,
  Heading,
  HeadingLeft,
  HeadingGrid,
  HeadingRight,
} from './style';
import { useNavigate } from 'react-router-dom';
import { User } from '../../../../types';
import { LocalBar } from '@mui/icons-material';

export const Header = ({ user }: { user: User | null }) => {
  const navigate = useNavigate();
  return (
    <Heading>
      <HeadingLeft>
        {user?.isBartender && <LocalBar />}
        {!user?.isBartender && (
          <Button
            size="small"
            type="button"
            sx={{ width: 'max-content' }}
            onClick={() => navigate('/bartender-apply')}
          >
            바텐더 인증 신청
          </Button>
        )}
      </HeadingLeft>
      <HeadingGrid>
        <Avatar>
          <AvatarImage src={user?.avatarUrl} />
          <AvatarText>{user?.nickname}</AvatarText>
        </Avatar>
      </HeadingGrid>
      <HeadingRight>
        <Button
          size="small"
          type="button"
          sx={{ width: 'max-content', marginBottom: '2px' }}
          onClick={() => navigate('/mypage/edit-avatar')}
        >
          아바타 변경
        </Button>
        <Button
          size="small"
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
