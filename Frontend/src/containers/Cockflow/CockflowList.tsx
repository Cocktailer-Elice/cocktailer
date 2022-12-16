import { Link } from 'react-router-dom'
import styled from 'styled-components';
import CockflowBackBtn from '../../components/Cockflow/CockflowBackBtn'
import CockflowHeader from '../../components/Cockflow/CockflowHeader'
import CockflowItemBox from '../../components/Cockflow/CockflowItemBox'

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
`


const CockflowList = () => {
  return (
    <>
      <CockflowHeader />
      <CockflowBackBtn></CockflowBackBtn>
      <List>
        {/* 임시로 */}
        <Item><CockflowItemBox/></Item>
        <Item><CockflowItemBox/></Item>
        <Item><CockflowItemBox/></Item>
        <Item><CockflowItemBox/></Item>
      </List>
    </>
  )
}

export default CockflowList
