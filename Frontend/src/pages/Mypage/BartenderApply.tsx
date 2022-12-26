import { Helmet } from 'react-helmet';
import { FormHeading } from '../../components/UserForm/styles';
import { BartenderFormContainer } from '../../containers/Mypage/BartenderFormContainer';

export const BartenderApply = () => {
  return (
    <>
      <Helmet>
        <title>Cocktailer | 바텐더 인증 신청</title>
      </Helmet>
      <FormHeading>바텐더 인증 신청</FormHeading>
      <BartenderFormContainer />
    </>
  );
};
