import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApplyContainer } from '../../containers/Cockcipe/ApplyContainer';
import { useCockcipeApply } from '../../hooks/useCockcipeApply';
import axios from 'axios';
import { GET_DETAIL_COCKTAIL } from '../../constants/api';

export const CockApplyPage = () => {
  const dataId = useCockcipeApply();
  const navigate = useNavigate();
  const [currentId, setCurrentId] = useState<number>(dataId);

  useEffect(() => {
    if (dataId && dataId !== currentId) {
      setCurrentId(dataId);
      axios
        .get(GET_DETAIL_COCKTAIL(dataId))
        .then((res) => {
          navigate(`/cockcipe/detail/${dataId}`);
        })
        .catch((err) => navigate(`/cockcipe`));
    }
  }, [dataId]);
  return (
    <>
      <Helmet>
        <title>Cocktailer | 칵테일 등록</title>
      </Helmet>
      <ApplyContainer />
    </>
  );
};
