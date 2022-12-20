import { Routes, Route } from 'react-router-dom';
import Join from '../pages/Join/Join';
import Login from '../pages/Login/Login';
import { Mypage } from '../pages/Mypage/Mypage';

export const UserRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>} />
      <Route path="/join" element={<Join></Join>} />
      <Route path="/find-email" element={<div>찾기</div>} />
      <Route path="/find-password" element={<div>찾기</div>} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/mypage/edit" element={<div>개인정보 수정</div>} />
      <Route path="/mypage/password-edit" element={<div>비밀번호 변경</div>} />
      <Route path="/pro-apply" element={<div>바텐더 인증 신청</div>} />
    </Routes>
  );
};
