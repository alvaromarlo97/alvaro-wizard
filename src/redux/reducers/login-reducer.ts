import actionTypes from '../actions/login-action-types';

export default function LoginUserDataReducer(User = [], action : any) {
  let nextUser = User;
  switch (action.type) {
    case actionTypes.LOAD_USER:
      nextUser = action?.data;
      break;
    default:
      break;
  }
  return nextUser;
}
