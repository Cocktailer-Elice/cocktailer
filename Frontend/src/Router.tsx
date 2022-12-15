import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CockcipePage from './pages/Cockcipe/CockcipePage';
import CockDetailPage from './pages/Cockcipe/CockDetailPage';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Hello world!</div>} />
          <Route path="/join" element={<div>join</div>} />
          <Route path="/login" element={<div>login</div>} />
          <Route path="/mypage" element={<div>mypage</div>} />
          <Route path="/cockgorithm" element={<div>cockgorithm</div>} />
          <Route path="/cockflow" element={<div>cockflow</div>} />
          <Route path="/cockcipe" element={<CockcipePage />} />
          <Route path="/cockcipe/detail" element={<CockDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;