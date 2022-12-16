import CockflowHeader from '../../components/Cockflow/CockflowHeader'
import CockflowBackBtn from '../../components/Cockflow/CockflowBackBtn'
import CockflowEnrollBox from '../../components/Cockflow/CockflowEnrollBox'
import CockflowEnrollBtns from '../../components/Cockflow/CockflowEnrollBtns'
import { P5 } from '../../components/Cockflow/CockflowStyle'

const CockflowEnroll = () => {
  return (
    <P5>
        <CockflowHeader />
        <CockflowBackBtn />
        <CockflowEnrollBox actived={false} />
        <CockflowEnrollBtns />
    </P5>
  )
}

export default CockflowEnroll
