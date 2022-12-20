import { Routes, Route } from 'react-router-dom';
import { Mypage } from '../pages/Mypage/Mypage';
import { FindEmail } from '../pages/Finds/FindEmail';
import { FindPassword } from '../pages/Finds/FindPassword';
import { Join } from '../pages/Join/Join';
import { Login } from '../pages/Login/Login';
import { EditAvatar } from '../pages/Mypage/Edit/EditAvatar';
import { EditPassword } from '../pages/Mypage/Edit/EditPassword';
import { BartenderApply } from '../pages/Mypage/BartenderApply';

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
    </Routes>
  );
};
