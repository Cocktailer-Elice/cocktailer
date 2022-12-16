import { Helmet } from 'react-helmet';
import JoinForm from '../../components/Join/JoinForm';

const JoinContainer = () => {
  return (
    <>
      <Helmet>
        <title>Cocktailer | 회원가입</title>
      </Helmet>
      <JoinForm></JoinForm>
    </>
  );
};

export default JoinContainer;
