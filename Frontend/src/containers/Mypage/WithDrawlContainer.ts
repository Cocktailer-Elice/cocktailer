import { connect } from 'react-redux';
import { WithdrawlButton } from '../../components/Mypage/WithdrawlButton';
import { userDelete } from '../../store/authActions';
import { AppDispatch, RootState } from '../../store/store';

const mapStateToProps = (state: RootState) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  userDelete: () => dispatch(userDelete()),
});

export const WithDrawlContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WithdrawlButton);
