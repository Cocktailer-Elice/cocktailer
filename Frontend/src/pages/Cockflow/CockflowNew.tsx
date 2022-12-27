import { CockflowHeader } from '../../components/Cockflow/CockflowHeader';
import { CockflowGetPost } from '../../components/Cockflow/CockflowGetPost'
import { CockflowLinkBtn } from '../../components/Cockflow/CockflowLinkBtn';
import { P5 } from '../../components/Cockflow/style';
import { Container } from '../../components/Cockflow/style';
import { Helmet } from 'react-helmet';

export const CockflowNew = () => {
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

