import { CockflowHeader } from '../../components/Cockflow/CockflowHeader';
import { CockflowGetPost } from '../../components/Cockflow/CockflowGetPost'
import { CockflowLinkBtn } from '../../components/Cockflow/CockflowLinkBtn';
import { P5 } from '../../components/Cockflow/style';
import { Container } from '../../components/Cockflow/style';

export const CockflowNew = () => {
  return (
    <Container>
      <P5>
        <CockflowHeader />
        <CockflowLinkBtn link="/cockflow" title="목록" />
        <CockflowGetPost />
      </P5>
    </Container>
  );
};

