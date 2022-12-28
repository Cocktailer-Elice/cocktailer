import { connect } from 'react-redux';
import { LoginReqData } from '../../../../types';
import { LoginForm } from '../../components/Login/LoginForm';
import { userLogin } from '../../store/authActions';
import { AppDispatch } from '../../store/store';

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  login: (data: LoginReqData) => {
    dispatch(userLogin(data)).then((res) => {
      if (res.type === 'user/login/rejected') {
        alert('로그인에 실패했습니다. 이메일/비밀번호를 확인해주세요.');
      }
    });
  },
});

export const LoginContainer = connect(null, mapDispatchToProps)(LoginForm);
