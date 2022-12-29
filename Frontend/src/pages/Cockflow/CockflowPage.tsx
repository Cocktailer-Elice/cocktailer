import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { CockflowLinkBtn } from '../../components/Cockflow/CockflowLinkBtn';
import { CockflowHeader } from '../../components/Cockflow/CockflowHeader';
import { P5 } from '../../components/Cockflow/style';
import { useInView } from 'react-intersection-observer';
import { Container } from '../../components/Cockflow/style';
import { Helmet } from 'react-helmet';
import { useAuthentication } from '../../hooks/useAuthentication';
import { GET_COCKFLOW } from '../../constants/api';
import { CockflowImgWrap } from '../../components/Cockflow/CockflowImgWrap';

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
    axios.get(GET_COCKFLOW(page))
      .then(res => {
        setMaxpage(res.data.maxRequest);

        if (listData[0].id === '0') {
          listData.shift();
        }
        setListData(() => listData.concat(res.data.cockflows));
      });
    setLoading(false);
  };

  useEffect(() => {
    if (inView && !loading) {
      setPage(prevState => prevState + 1);
      if (page <= maxPage) {
        getList();
      }
    }
  }, [inView]);

  return (
    <Container>
      <Helmet>
        <title>Cocktailer | 칵플로우</title>
      </Helmet>
      <ListWrapper>
        <CockflowHeader />
        {
          isLoggedIn && <CockflowLinkBtn link="/cockflow/new" title="질문하기" />
        }
        <List>
          {listData.map((item, index) =>
            <CockflowImgWrap item={item} index={index} />
          )}
        </List>
        <Pointer ref={ref}></Pointer>
      </ListWrapper>
    </Container>
  );
};

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  -webkit-column-gap: 29px;
  column-gap: 20px;
`;

const ListWrapper = styled(P5)`
  position: relative;
`;

const Pointer = styled.p`
  position: absolute;
  bottom: 15%;
`;