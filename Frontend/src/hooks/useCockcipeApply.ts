import { useAppSelector } from '../store/store';

export const useCockcipeApply = () => {
  const { dataId } = useAppSelector((state) => state.cockcipe);
  return dataId;
};
