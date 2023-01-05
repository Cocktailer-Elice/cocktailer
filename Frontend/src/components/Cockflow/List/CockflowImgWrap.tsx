import { CockflowItemBox } from "./CockflowItemBox";
import { slice20 } from '../../../utils/TrimTime';
import styled from "styled-components";

const imgS3 = (index: number) => {
    const num = (index % 20);
    return `https://d1yzaezdg07e50.cloudfront.net/CockflowList/img${num}.jpg`;
};

interface TypeItem {
    item: {
        id: string,
        title: string
    },
    index: number
};

export const CockflowImgWrap = ({ item, index }: TypeItem) => {
    return (
        <Item key={item.id}>
            <CockflowItemBox key={item.id} id={item.id} title={slice20(item.title)}
                content={imgS3(index)} />
        </Item>
    );
};

const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28.9px;
`;