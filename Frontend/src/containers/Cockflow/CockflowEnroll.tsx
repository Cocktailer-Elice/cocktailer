import { CockflowHeader } from '../../components/Cockflow/CockflowHeader';
import { CockflowLinkBtn } from '../../components/Cockflow/CockflowLinkBtn';
import { CockflowEnrollBox } from '../../components/Cockflow/CockflowEnrollBox';
import { CockflowEnrollBtns } from '../../components/Cockflow/CockflowEnrollBtns';
import { P5 } from '../../components/Cockflow/style';

export const CockflowEnroll = () => {
  return (
    <P5>
      <CockflowHeader />
      <CockflowLinkBtn link="/cockflow" title="목록" />
      <CockflowEnrollBox actived={false} />
      <CockflowEnrollBtns />
    </P5>
  );
};