import styled from 'styled-components';
import { motion } from 'framer-motion';

import { dimmedVariants } from './../constants/motionVariants';

interface DimmedProps {
  handleDimmedClick: () => void;
}

export const Dimmed = ({ handleDimmedClick }: DimmedProps) => {
  return (
    <DimmedBackground
      variants={dimmedVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onClick={handleDimmedClick}
    />
  );
};

const DimmedBackground = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
`;
