import { Routes, Route } from 'react-router-dom';
import Join from '../pages/Join/Join';
import Login from '../pages/Login/Login';

export const UserRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>} />
      <Route path="/join" element={<Join></Join>} />
    </Routes>
  );
};
