import { CockflowHeader } from '../../components/Cockflow/Common/CockflowHeader';
import { CockflowGetPost } from '../../components/Cockflow/Add/CockflowAdd';
import { CockflowLinkBtn } from '../../components/Cockflow/Buttons/CockflowLinkBtn';
import { P5 } from '../../components/Cockflow/Style/style';
import { Container } from '../../components/Cockflow/Style/style';
import { Helmet } from 'react-helmet';
import { withLogin } from '../../common/withLogin';

const CockflowNew = () => {
  return (
    <Container>
      <Helmet>
        <title>Cocktailer | 칵플로우 질문하기</title>
      </Helmet>
      <P5>
        <CockflowHeader />
        <CockflowLinkBtn link="/cockflow" title="목록" />
        <CockflowGetPost />
      </P5>
    </Container>
  );
};

export const CockflowNewWithLogin = withLogin(CockflowNew);
