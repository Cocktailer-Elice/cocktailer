import { CockflowHeader } from '../../components/Cockflow/CockflowHeader';
import { CockflowGetPost } from '../../components/Cockflow/CockflowGetPost'
import { CockflowLinkBtn } from '../../components/Cockflow/CockflowLinkBtn';
import { P5 } from '../../components/Cockflow/style';

export const CockflowEnroll = () => {
  return (
    <P5>
      <CockflowHeader />
      <CockflowLinkBtn link="/cockflow" title="목록" />
      <CockflowGetPost />
    </P5>
  );
};