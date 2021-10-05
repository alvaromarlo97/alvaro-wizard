import actionTypes from '../actions/login-action-types';

export default function AgeReducer(Age = [], action : any) {
  let nextAge = Age;
  switch (action.type) {
    case actionTypes.LOAD_AGE:
      nextAge = action?.data;
      break;
    default:
      break;
  }
  return nextAge;
}
