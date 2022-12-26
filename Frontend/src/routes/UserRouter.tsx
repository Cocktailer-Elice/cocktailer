import { Routes, Route } from 'react-router-dom';
import { Mypage } from '../pages/Mypage/Mypage';
import { FindEmail } from '../pages/Finds/FindEmail';
import { FindPassword } from '../pages/Finds/FindPassword';
import { Join } from '../pages/Join/Join';
import { Login } from '../pages/Login/Login';
import { EditAvatar } from '../pages/Mypage/Edit/EditAvatar';
import { EditPassword } from '../pages/Mypage/Edit/EditPassword';
import { BartenderApply } from '../pages/Mypage/BartenderApply';
import { Logout } from '../pages/Logout/Logout';
import { Details } from '../pages/Mypage/Details';

export const UserRouter = () => {
  return (
    <Routes>
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/mypage/edit-avatar" element={<EditAvatar />} />
      <Route path="/mypage/edit-password" element={<EditPassword />} />
      <Route path="/bartender-apply" element={<BartenderApply />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/find-email" element={<FindEmail />} />
      <Route path="/find-password" element={<FindPassword />} />
      <Route path="/logout" element={<Logout />} />
      {/* <Route path="/mypage/comments" element={<Details detail="내 댓글" title="내 댓글"/>} /> */}
      <Route
        path="/mypage/cockflows"
        element={<Details title="내 칵플로우" />}
      />
      <Route
        path="/mypage/likes"
        element={<Details title="좋아요한 칵시피" />}
      />
      <Route path="/mypage/cockcipes" element={<Details title="내 칵시피" />} />
    </Routes>
  );
};
