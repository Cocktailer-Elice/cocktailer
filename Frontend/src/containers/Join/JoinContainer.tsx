import { Helmet } from 'react-helmet';
import JoinFormWrapper from '../../components/Join/JoinFormWrapper';
import JoinHeader from '../../components/Join/JoinHeader';

const JoinContainer = () => {
  return (
    <>
      <Helmet>
        <title>Cocktailer | 회원가입</title>
      </Helmet>
      <JoinHeader></JoinHeader>
      <JoinFormWrapper></JoinFormWrapper>
    </>
  );
};

export default JoinContainer;
