import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home/Home';
import { Drawer } from '../containers/Main/Drawer/Drawer';

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
