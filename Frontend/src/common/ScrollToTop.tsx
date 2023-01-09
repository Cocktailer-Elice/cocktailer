import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const ScrollToTop = () => {
  const [showButton, setShowButton] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

  const goToTop = (): void => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScrollY = (): void => {
    setScrollY(window.scrollY);

    if (scrollY > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    const watchScrollY = () => {
      window.addEventListener('scroll', handleScrollY);
    };
    watchScrollY();
    return () => {
      window.removeEventListener('scroll', handleScrollY);
    };
  });

  return showButton ? (
    <ScrollContainer>
      <CustomKeyboardArrowUpIcon onClick={goToTop} />
    </ScrollContainer>
  ) : (
    <></>
  );
};

const ScrollContainer = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50px;
  background-color: #eee;
  position: fixed;

  right: calc(50% - 300px);
  bottom: 3%;
  z-index: 9;

  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 600px) {
    right: calc(50% - 250px);
  }

  @media screen and (max-width: 500px) {
    right: calc(50% - 170px);
  }
`;

const CustomKeyboardArrowUpIcon = styled(KeyboardArrowUpIcon)`
  font-size: 28px;
  cursor: pointer;
`;
