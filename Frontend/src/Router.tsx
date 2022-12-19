import { CockcipeRouter } from './routes/CockcipeRouter';
import { CockflowRouter } from './routes/CockflowRouter';
import { CockgorithmRouter } from './routes/CockgorithmRouter';
import { MainRouter } from './routes/MainRouter';
import { UserRouter } from './routes/UserRouter';

export const Router = () => {
  return (
    <>
      <MainRouter />
      <UserRouter />
      <CockflowRouter />
      <CockgorithmRouter />
      <CockcipeRouter />
    </>
  );
};
