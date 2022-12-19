import styled from 'styled-components';
import { CockflowLinkBtn } from '../../components/Cockflow/CockflowLinkBtn';
import { CockflowHeader } from '../../components/Cockflow/CockflowHeader';
import { CockflowItemBox } from '../../components/Cockflow/CockflowItemBox';
import { P5 } from '../../components/Cockflow/style';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 120px);
  column-gap: 29px;
`;

const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 14.9px;
`;


export const CockflowList = () => {
  return (
    <P5>
      <CockflowHeader />
      <CockflowLinkBtn link="/cockflow/new" title="질문하기" />
      <List>
        {/* 임시로 */}
        <Item><CockflowItemBox /></Item>
        <Item><CockflowItemBox /></Item>
        <Item><CockflowItemBox /></Item>
        <Item><CockflowItemBox /></Item>
      </List>
    </P5>
  );
};