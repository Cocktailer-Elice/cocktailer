import { connect } from 'react-redux';
import { UserCreateData } from '../../../../types';
import { JoinForm } from '../../components/Join/JoinForm';
import { userRegister } from '../../store/authActions';
import { AppDispatch } from '../../store/store';

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  register: (data: UserCreateData) => dispatch(userRegister(data)),
});

export const JoinContainer = connect(null, mapDispatchToProps)(JoinForm);
