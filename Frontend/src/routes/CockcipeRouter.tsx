import { Routes, Route } from 'react-router-dom';
import { CockApplyPage } from '../pages/Cockcipe/CockApplyPage';
import { CockcipePage } from '../pages/Cockcipe/CockcipePage';
import { CockDetailPage } from '../pages/Cockcipe/CockDetailPage';

export const CockcipeRouter = () => {
  return (
    <Routes>
      <Route path="/cockcipe" element={<CockcipePage />} />
      <Route path="/cockcipe/detail/:id" element={<CockDetailPage />} />
      <Route path="/cockcipe/apply" element={<CockApplyPage />} />
    </Routes>
  );
};
