import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { withLogin } from '../../common/withLogin';
import { DetailHeading } from '../../components/Mypage/DetailHeading';
import { Scroll } from '../../components/Mypage/Scroll';
import { LongBoard } from '../../components/Mypage/LongBoard';
import {
  GET_MY_COCKFLOWS,
  GET_MY_COCKTAILS,
  GET_MY_COMMENTS,
} from '../../constants/api';
import axios from 'axios';
import { Container } from '@mui/material';
import { Comments } from '../../components/Mypage/Comments';

interface DetailPageProps {
  title: string;
}

const Details = ({ title }: DetailPageProps) => {
  const { pathname } = useLocation();
  const detail = pathname.split('/')[2];
  const [data, setData] = useState();

  const getData = async () => {
    switch (detail) {
      case 'cockcipes':
        const { data: cockcipes } = await axios.get(GET_MY_COCKTAILS);
        return setData(cockcipes);
      // case 'likes':
      //   const { data: likes } = await axios.get();
      //   return setData(likes);
      case 'cockflows':
        const { data: cockflows } = await axios.get(GET_MY_COCKFLOWS);
        return setData(cockflows);
      case 'comments':
        const { data: comments } = await axios.get(GET_MY_COMMENTS);
        return setData(comments);
    }
  };

  useEffect(() => {
    getData();
  }, [detail]);

  return (
    <>
      <Helmet>
        <title>Cocktailer | {title}</title>
      </Helmet>
      <Container sx={{ padding: '1rem' }}>
        <DetailHeading title={title} />
        {detail === 'cockcipes' && <Scroll data={data} />}
        {detail === 'likes' && <Scroll data={data} />}
        {detail === 'cockflows' && <LongBoard data={data} />}
        {detail === 'comments' && <Comments data={data} />}
      </Container>
    </>
  );
};

export const DetailsWithLogin = withLogin(Details);
