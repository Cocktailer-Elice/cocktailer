import { CockflowHeader } from '../../components/Cockflow/CockflowHeader';
import { CockflowBackBtn } from '../../components/Cockflow/CockflowBackBtn';
import { CockflowEnrollBox } from '../../components/Cockflow/CockflowEnrollBox';
import { CockflowAddComment } from '../../components/Cockflow/CockflowAddComment';
import { CockflowCommentBox } from '../../components/Cockflow/CockflowCommentBox';
import { P5 } from '../../components/Cockflow/style';

export const CockflowContent = () => {
  return (
    <>
      <CockflowHeader />
      <P5>
        <CockflowBackBtn />
        <CockflowEnrollBox />
        <br />
        <CockflowAddComment />
        <CockflowCommentBox />
      </P5>
    </>
  );
};
