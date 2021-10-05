import actionTypes from '../actions/login-action-types';

export function AgeValidation(Age = [], action : any) {
  if (action.type === actionTypes.LOAD_AGE) {
    return action.Age;
  }
  return Age;
}
export function LoginUserData(User = [], action: any) {
  if (action.type === actionTypes.LOAD_USER) {
    return action.User;
  }
  return User;
}
