import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { CockflowLinkBtn } from '../../components/Cockflow/CockflowLinkBtn';
import { CockflowHeader } from '../../components/Cockflow/CockflowHeader';
import { CockflowItemBox } from '../../components/Cockflow/CockflowItemBox';
import { P5 } from '../../components/Cockflow/style';
import { slice20 } from '../../components/Cockflow/CockflowUtils';
import { useInView } from 'react-intersection-observer';
import { Container } from '../../components/Cockflow/style';
import { Helmet } from 'react-helmet';
import { useAuthentication } from '../../hooks/useAuthentication';


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

console.log(`https://cockflow.s3.ap-northeast-1.amazonaws.com/CockflowList/`)
// https://cockflow.s3.ap-northeast-1.amazonaws.com/CockflowList/img0.jpg

export const CockflowPage = () => {
  const [listData, setListData] = useState([{
    id: '0',
    title: '',
  }]);

  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);

  const [maxPage, setMaxpage] = useState(1);

  const [ref, inView] = useInView();

  const isLoggedIn = useAuthentication();

  const getList = () => {
    setLoading(true);
    axios.get(`/api/cockflow/?q=${page}`)
      .then(res => {
        setMaxpage(res.data.maxRequest);

        if (listData[0].id === '0') {
          listData.shift();
        }
        setListData(() => listData.concat(res.data.cockflows));
      });
    setLoading(false);
  }

  useEffect(() => {
    if (inView && !loading) {
      setPage(prevState => prevState + 1);
      if (page <= maxPage) {
        getList();
      }
    }
  }, [inView]);

  useEffect(() => {
    // const data = axios.get(`https://cockflow.s3.ap-northeast-1.amazonaws.com/CockflowList/`)
    // console.log(data)

  }, [])

  return (
    <Container>
      <Helmet>
        <title>Cocktailer | 칵플로우</title>
      </Helmet>
      <P5>
        <CockflowHeader />
        {
          isLoggedIn && <CockflowLinkBtn link="/cockflow/new" title="질문하기" />
        }
        <List>
          {listData.map(item =>
            <Item key={item.id}>
              <CockflowItemBox key={item.id} id={item.id} title={slice20(item.title)}
                content={imgArr[Math.round(Math.random() * (imgArr.length - 1))]} />
            </Item>
          )}
        </List>
        <p ref={ref}></p>
      </P5>
    </Container>
  );
};

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