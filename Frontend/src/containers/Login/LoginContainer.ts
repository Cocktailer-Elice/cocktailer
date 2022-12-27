import { connect } from 'react-redux';
import { LoginReqData } from '../../../../types';
import { LoginForm } from '../../components/Login/LoginForm';
import { userLogin } from '../../store/authActions';
import { AppDispatch } from '../../store/store';

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  login: (data: LoginReqData) => dispatch(userLogin(data)),
});

export const LoginContainer = connect(null, mapDispatchToProps)(LoginForm);
