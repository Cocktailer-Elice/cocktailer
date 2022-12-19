import { Routes, Route } from 'react-router-dom';
import { Join } from '../pages/Join/Join';
import { Login } from '../pages/Login/Login';

export const UserRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/find-email" element={<div>찾기</div>} />
      <Route path="/find-password" element={<div>찾기</div>} />
    </Routes>
  );
};
