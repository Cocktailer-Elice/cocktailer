import { Routes, Route } from 'react-router-dom';
import { MypageWithLogin } from '../pages/Mypage/Mypage';
import { FindEmail } from '../pages/Finds/FindEmail';
import { FindPassword } from '../pages/Finds/FindPassword';
import { Join } from '../pages/Join/Join';
import { Login } from '../pages/Login/Login';
import { EditAvatarWithLogin } from '../pages/Mypage/Edit/EditAvatar';
import { EditPasswordWithLogin } from '../pages/Mypage/Edit/EditPassword';
import { BartenderApplyWithLogin } from '../pages/Mypage/BartenderApply';
import { Logout } from '../pages/Logout/Logout';
import { DetailsWithLogin } from '../pages/Mypage/Details';

export const UserRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/find-email" element={<FindEmail />} />
      <Route path="/find-password" element={<FindPassword />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/mypage" element={<MypageWithLogin />} />
      <Route path="/mypage/edit-avatar" element={<EditAvatarWithLogin />} />
      <Route path="/mypage/edit-password" element={<EditPasswordWithLogin />} />
      <Route path="/bartender-apply" element={<BartenderApplyWithLogin />} />
      <Route
        path="/mypage/cockflows"
        element={<DetailsWithLogin title="내 칵플로우" />}
      />
      <Route
        path="/mypage/likes"
        element={<DetailsWithLogin title="좋아요한 칵시피" />}
      />
      <Route
        path="/mypage/cockcipes"
        element={<DetailsWithLogin title="내 칵시피" />}
      />
      <Route
        path="/mypage/comments"
        element={<DetailsWithLogin title="내가 남긴 댓글" />}
      />
    </Routes>
  );
};
