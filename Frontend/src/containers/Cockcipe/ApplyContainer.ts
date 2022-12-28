import { connect } from 'react-redux';
import { CocktailApplyData } from '../../../../types';
import { ApplyWrapper } from '../../components/Cockcipe/ApplyWrapper';
import { cockcipeApply } from '../../store/cockcipeActions';
import { AppDispatch } from '../../store/store';

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  apply: (newData: CocktailApplyData) => dispatch(cockcipeApply(newData)),
});

export const ApplyContainer = connect(null, mapDispatchToProps)(ApplyWrapper);
