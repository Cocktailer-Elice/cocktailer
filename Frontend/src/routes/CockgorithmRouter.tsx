import { Routes, Route } from 'react-router-dom';

import { CockgorithmPage } from '../pages/Cockgorithm/CockgorithmPage';

export const CockgorithmRouter = () => {
  return (
    <Routes>
      <Route path="/cockgorithm" element={<CockgorithmPage />}></Route>
    </Routes>
  );
};
