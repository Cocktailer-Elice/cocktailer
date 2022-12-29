import { connect } from 'react-redux';

import { cockgorithmSlice } from '../../store/cockgorithmSlice';
import { AppDispatch, RootState } from '../../store/store';
import { CockgorithmGameContent } from './../../components/Cockgorithm/CockgorithmGameContent';

const mapStateToProps = (state: RootState) => ({
  selectedGame: state.cockgorithm.selectedGame,
  questionCounter: state.cockgorithm.questionCounter,
});

const { increaseQuestionCounter, setIsLoadingOpen, setFilters } =
  cockgorithmSlice.actions;

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  increaseQuestionCounter: () => dispatch(increaseQuestionCounter({})),
  setIsLoadingOpen: (boolean: boolean) => dispatch(setIsLoadingOpen(boolean)),
  setFilters: (filterName: string, filterValue: string) =>
    dispatch(setFilters({ filterName, filterValue })),
});

export const CockgorithmGameContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CockgorithmGameContent);
