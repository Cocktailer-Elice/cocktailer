
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { CockflowLinkBtn } from '../../components/Cockflow/CockflowLinkBtn';
import { CockflowHeader } from '../../components/Cockflow/CockflowHeader';
import { CockflowItemBox } from '../../components/Cockflow/CockflowItemBox';
import { P5 } from '../../components/Cockflow/style';
import { slice20 } from '../../components/Cockflow/CockflowUtils';
import { useInView } from 'react-intersection-observer';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  -webkit-column-gap: 29px;
  column-gap: 20px;
`;

const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28.9px;
`;

const imgArr = [
  'https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_960_720.jpg',
  'https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_960_720.jpg',
  'https://cdn.pixabay.com/photo/2016/01/02/04/58/martini-1117932_960_720.jpg',
  'https://cdn.pixabay.com/photo/2015/11/29/01/38/ice-1068233_960_720.jpg',
  'https://cdn.pixabay.com/photo/2018/04/08/13/17/glass-3301200_960_720.jpg',
  'https://cdn.pixabay.com/photo/2018/03/06/07/01/drink-3202709__340.jpg',
  'https://cdn.pixabay.com/photo/2015/07/23/19/23/cocktail-857393__340.jpg',
  'https://cdn.pixabay.com/photo/2018/03/18/18/54/drink-3237895__340.jpg'
];

export const CockflowList = () => {
  const [listData, setListData] = useState([{
    id: '0',
    content: '',
  }]);

  const page = useRef<number>(1);
  console.log(page)
  const [ref, inView] = useInView();

  const getList = () => {
    console.log(page)
    axios.get(`http://localhost:8000/api/cockflow/?q=${page}`)
      .then(res => {
        console.log(res);
        if (listData[0].id === '0') {
          listData.shift();
        }
        setListData(() => listData.concat(res.data.cockflows));
        page.current += 1;
      });
  }


  useEffect(() => {
    if (inView) {
      getList();
    }
  }, [inView, getList]);

  return (
    <P5>
      <CockflowHeader />
      <CockflowLinkBtn link="/cockflow/new" title="질문하기" />
      <List>
        {listData.map(item =>
          <Item key={item.id}>
            <CockflowItemBox key={item.id} id={item.id} title={slice20(item.content)}
              content={imgArr[Math.round(Math.random() * (imgArr.length - 1))]} />
          </Item>
        )}
      </List>
      <div ref={ref}></div>
    </P5>
  );
};