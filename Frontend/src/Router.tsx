import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CockcipeRouter } from './routes/CockcipeRouter';
import { CockflowRouter } from './routes/CockflowRouter';
import { CockgorithmRouter } from './routes/CockgorithmRouter';
import { MainRouter } from './routes/MainRouter';
import { UserRouter } from './routes/UserRouter';

const Router = () => {
  return (
    <BrowserRouter>
      <MainRouter />
      <UserRouter />
      <CockflowRouter />
      <CockgorithmRouter />
      <CockcipeRouter />
    </BrowserRouter>
  );
};

export default Router;
