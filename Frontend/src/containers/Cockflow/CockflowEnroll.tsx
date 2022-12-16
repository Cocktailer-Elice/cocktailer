import CockflowHeader from '../../components/Cockflow/CockflowHeader'
import CockflowBackBtn from '../../components/Cockflow/CockflowBackBtn'
import CockflowEnrollBox from '../../components/Cockflow/CockflowEnrollBox'
import CockflowEnrollBtns from '../../components/Cockflow/CockflowEnrollBtns'

const CockflowEnroll = () => {
  return (
    <>
        <CockflowHeader />
        <CockflowBackBtn />
        <CockflowEnrollBox actived={false} />
        <CockflowEnrollBtns />
    </>
  )
}

export default CockflowEnroll
