import { connect } from 'react-redux';

import { cockgorithmSlice } from '../../store/cockgorithmSlice';
import { AppDispatch, RootState } from '../../store/store';
import { IGame } from './../../store/cockgorithmSlice';
import { CockgorithmGameList } from '../../components/Cockgorithm/CockgorithmGameList';

const mapStateToProps = (state: RootState) => ({
  selectedGame: state.cockgorithm.selectedGame,
});

const { resetCockgorithmState, setSelectedGame, setIsModalOpen } =
  cockgorithmSlice.actions;

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  resetCockgorithmState: () => dispatch(resetCockgorithmState({})),
  setSelectedGame: (game: IGame) => dispatch(setSelectedGame(game)),
  setIsModalOpen: (boolean: boolean) => dispatch(setIsModalOpen(boolean)),
});

export const CockgorithmGameListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CockgorithmGameList);
