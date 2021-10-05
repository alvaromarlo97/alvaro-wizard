import { combineReducers } from 'redux';
import { AgeValidation, LoginUserData } from './login-reducers';

export default combineReducers({
  Age: AgeValidation,
  User: LoginUserData,
});
