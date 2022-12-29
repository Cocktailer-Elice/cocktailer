import { connect } from 'react-redux';

import { cockgorithmSlice } from '../../store/cockgorithmSlice';
import { AppDispatch, RootState } from '../../store/store';
import { CockgorithmCocktail } from '../../../../types';
import { CockgorithmModal } from './../../components/Cockgorithm/CockgorithmModal';

const mapStateToProps = (state: RootState) => ({
  selectedGame: state.cockgorithm.selectedGame,
  filters: state.cockgorithm.filters,
  isLoadingOpen: state.cockgorithm.isLoadingOpen,
  isGameResultOpen: state.cockgorithm.isGameResultOpen,
});

const {
  setIsModalOpen,
  setIsFoundCocktail,
  setCocktailInfo,
  setIsGameResultOpen,
} = cockgorithmSlice.actions;

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setIsModalOpen: (boolean: boolean) => dispatch(setIsModalOpen(boolean)),
  setIsFoundCocktail: (boolean: boolean) =>
    dispatch(setIsFoundCocktail(boolean)),
  setCocktailInfo: (cocktailInfo: CockgorithmCocktail) =>
    dispatch(setCocktailInfo(cocktailInfo)),
  setIsGameResultOpen: (boolean: boolean) =>
    dispatch(setIsGameResultOpen(boolean)),
});

export const CockgorithmModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CockgorithmModal);
