import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CockflowHeader } from '../../components/Cockflow/Common/CockflowHeader';
import { CockflowLinkBtn } from '../../components/Cockflow/Buttons/CockflowLinkBtn';
import { CockflowDetailBox } from '../../components/Cockflow/Detail/CockflowDetailBox';
import { CockflowAdd } from '../../components/Cockflow/Detail/CockflowAdd';
import { CockflowCommentWrap } from '../../components/Cockflow/Detail/CockflowCommentWrap';
import { P10P15 } from '../../components/Cockflow/Style/style';
import { CockflowGetResData } from '../../../../types/cockflowType';
import { Container } from '../../components/Cockflow/Style/style';
import { Helmet } from 'react-helmet';
import { useAuthentication } from '../../hooks/useAuthentication';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { COCKFLOW_ID } from '../../constants/api';

export const CockflowDetail = () => {
  const user = useCurrentUser();

  let params = useParams();
  const ids = params.cockflowId;

  const isLoggedIn = useAuthentication();
  const [resData, setResData] = useState<CockflowGetResData | null>(null);
  const [isAuthor, setIsAuthor] = useState(false);
  const [data, setData] = useState({
    _id: 0,
    id: 0,
    title: '',
    isBartender: false,
    nickname: '',
    createdAt: new Date(),
    content: '',
  });

  const [comments, setComments] = useState({
    _id: '',
    owner: {
      id: 0,
      nickname: '',
      isBartender: false,
    },
    content: '',
    subComments: [],
    comments: [],
  });

  useEffect(() => {
    if (user && user.id === data.id) {
      setIsAuthor(true);
    }
  }, [user, data]);

  useEffect(() => {
    axios.get<CockflowGetResData | any>(COCKFLOW_ID(ids)).then((res) => {
      if (res.data) {
        setResData(res.data);
        const newData = {
          _id: res.data.id,
          id: res.data.owner.id,
          title: res.data.title,
          isBartender: res.data.owner.isBartender,
          nickname: res.data.owner.nickname,
          createdAt: res.data.createdAt,
          content: res.data.content,
        };
        setData(newData);

        if (res.data.comments) {
          setComments(res.data);
        }
      }
    });
  }, [ids]);

  return (
    <Container>
      <Helmet>
        <title>Cocktailer | ???????????? ????????????</title>
      </Helmet>
      <CockflowHeader />
      <P10P15>
        <CockflowLinkBtn link="/cockflow" title="??????" />
        <CockflowDetailBox detailData={data} isAuthor={isAuthor} />
        <br />
        {isLoggedIn && ids && <CockflowAdd cockflowId={ids} />}
        <CockflowCommentWrap
          cockflowId={ids}
          commentlist={comments}
          isAuthor={isAuthor}
        />
      </P10P15>
    </Container>
  );
};
