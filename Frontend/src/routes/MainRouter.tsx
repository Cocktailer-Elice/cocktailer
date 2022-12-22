import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
