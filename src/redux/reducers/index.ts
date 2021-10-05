import { combineReducers } from 'redux';
import LoginUserDataReducer from './login-reducer';
import AgeReducer from './age-reducer';

export default combineReducers({
  Age: AgeReducer,
  User: LoginUserDataReducer,
});
