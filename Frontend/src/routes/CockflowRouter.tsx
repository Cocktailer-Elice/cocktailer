import { Routes, Route } from 'react-router-dom';
import { CockflowPage } from '../pages/Cockflow/CockflowPage'
import { CockflowDetail } from '../pages/Cockflow/CockflowDetail'
import { CockflowNew } from '../pages/Cockflow/CockflowNew'

export const CockflowRouter = () => {
  return (
    <Routes>
      <Route path="/cockflow" element={<CockflowPage />}></Route>
      <Route path="/cockflow/new" element={<CockflowNew />}></Route>
      <Route path="/cockflow/detail/:cockflowId" element={<CockflowDetail />}></Route>
    </Routes>
  );
};