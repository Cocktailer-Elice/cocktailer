import { connect } from 'react-redux';
import { cockgorithmSlice } from '../../store/cockgorithmSlice';

import { AppDispatch, RootState } from '../../store/store';
import { CockgorithmGameResult } from './../../components/Cockgorithm/CockgorithmGameResult';

const mapStateToProps = (state: RootState) => ({
  isFoundCocktail: state.cockgorithm.isFoundCocktail,
  cocktailInfo: state.cockgorithm.cocktailInfo,
});

const { resetCockgorithmState } = cockgorithmSlice.actions;

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  resetCockgorithmState: () => dispatch(resetCockgorithmState({})),
});

export const CockgorithmGameResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CockgorithmGameResult);
