import { Routes, Route } from 'react-router-dom';
import { CockApplyPage } from '../pages/Cockcipe/CockApplyPage';
import { CockCategoryItemPage } from '../pages/Cockcipe/CockCategoryItemPage';
import { CockcipePage } from '../pages/Cockcipe/CockcipePage';
import { CockDetailPage } from '../pages/Cockcipe/CockDetailPage';

export const CockcipeRouter = () => {
  return (
    <Routes>
      <Route path="/cockcipe" element={<CockcipePage />} />
      <Route path="/cockcipe/detail/:id" element={<CockDetailPage />} />
      <Route path="/cockcipe/apply" element={<CockApplyPage />} />
      <Route
        path="/cockcipe/category/:categoryId"
        element={<CockCategoryItemPage />}
      />
    </Routes>
  );
};
