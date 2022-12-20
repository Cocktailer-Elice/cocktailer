import { Routes, Route } from 'react-router-dom';
import { Mypage } from '../pages/Mypage/Mypage';
import { FindEmail } from '../pages/Finds/FindEmail';
import { FindPassword } from '../pages/Finds/FindPassword';
import { Join } from '../pages/Join/Join';
import { Login } from '../pages/Login/Login';

export const UserRouter = () => {
  return (
    <Routes>
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/mypage/edit" element={<div>개인정보 수정</div>} />
      <Route path="/mypage/password-edit" element={<div>비밀번호 변경</div>} />
      <Route path="/pro-apply" element={<div>바텐더 인증 신청</div>} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/find-email" element={<FindEmail />} />
      <Route path="/find-password" element={<FindPassword />} />
    </Routes>
  );
};
