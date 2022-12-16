import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CockcipeRouter } from './routes/CockcipeRouter';
import { CockflowRouter } from './routes/CockflowRouter';
import { CockgorithmRouter } from './routes/CockgorithmRouter';
import { MainRouter } from './routes/MainRouter';
import { UserRouter } from './routes/UserRouter';
import Header from './containers/Main/Header/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <MainRouter />
      <UserRouter />
      <CockflowRouter />
      <CockgorithmRouter />
      <CockcipeRouter />
    </BrowserRouter>
  );
};

export default Router;
