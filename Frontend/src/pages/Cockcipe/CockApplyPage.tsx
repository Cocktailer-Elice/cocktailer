import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApplyContainer } from '../../containers/Cockcipe/ApplyContainer';
import { useCockcipeApply } from '../../hooks/useCockcipeApply';

export const CockApplyPage = () => {
  const dataId = useCockcipeApply();
  const navigate = useNavigate();
  const [currentId, setCurrentId] = useState<number>(dataId);

  useEffect(() => {
    if (dataId && dataId !== currentId) {
      console.log(dataId, currentId);
      setCurrentId(dataId);
      navigate(`/cockcipe/detail/${dataId}`);
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
