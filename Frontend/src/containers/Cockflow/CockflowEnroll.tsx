import { useForm } from 'react-hook-form';
import { CockflowHeader } from '../../components/Cockflow/CockflowHeader';
import { CockflowLinkBtn } from '../../components/Cockflow/CockflowLinkBtn';
import { CockflowEnrollBox } from '../../components/Cockflow/CockflowEnrollBox';
import { CockflowEnrollBtns } from '../../components/Cockflow/CockflowEnrollBtns';
import { P5 } from '../../components/Cockflow/style';

export const CockflowEnroll = () => {
  const { register, handleSubmit } = useForm();
  console.log(register)
  return (
    <P5>
      <CockflowHeader />
      <CockflowLinkBtn link="/cockflow" title="목록" />
      <form  onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
        <CockflowEnrollBox actived={false} />
        <CockflowEnrollBtns />
      </form>
    </P5>
  );
};