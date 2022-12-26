import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuthentication';

interface DetailPageProps {
  title: string;
}

export const Details = ({ title }: DetailPageProps) => {
  const isLoggedIn = useAuthentication();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const detail = pathname.split('/')[2];

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn]);

  return (
    <>
      <Helmet>
        <title>Cocktailer | {title}</title>
      </Helmet>
      {/* <DetailContainer /> */}
    </>
  );
};
