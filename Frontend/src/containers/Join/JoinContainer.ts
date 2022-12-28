import { connect } from 'react-redux';
import { UserCreateData } from '../../../../types';
import { JoinForm } from '../../components/Join/JoinForm';
import { userRegister } from '../../store/authActions';
import { AppDispatch, RootState } from '../../store/store';

const mapStateToProps = (state: RootState) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  register: (data: UserCreateData) =>
    dispatch(userRegister(data)).then((res) => {
      if (res.type === 'user/signup/rejected') {
        console.log(res);
        alert('회원가입에 실패했습니다. 다시 시도해주세요.');
      }
    }),
});

export const JoinContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(JoinForm);
