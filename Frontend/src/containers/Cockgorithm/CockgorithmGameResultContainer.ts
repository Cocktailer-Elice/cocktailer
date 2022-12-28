import { connect } from 'react-redux';

import { RootState } from '../../store/store';
import { CockgorithmGameResult } from './../../components/Cockgorithm/CockgorithmGameResult';

const mapStateToProps = (state: RootState) => ({
  isFoundCocktail: state.cockgorithm.isFoundCocktail,
  cocktailInfo: state.cockgorithm.cocktailInfo,
});

export const CockgorithmGameResultContainer = connect(
  mapStateToProps,
  null,
)(CockgorithmGameResult);
