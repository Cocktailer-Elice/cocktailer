import { Helmet } from 'react-helmet';
import { withLogin } from '../../common/withLogin';
import { BartenderApplyForm } from '../../components/Mypage/BartenderApplyForm';
import { FormHeading } from '../../components/UserForm/styles';

const BartenderApply = () => {
  return (
    <>
      <Helmet>
        <title>Cocktailer | 바텐더 인증 신청</title>
      </Helmet>
      <FormHeading>바텐더 인증 신청</FormHeading>
      <BartenderApplyForm />
    </>
  );
};

export const BartenderApplyWithLogin = withLogin(BartenderApply);
