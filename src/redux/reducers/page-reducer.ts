import actionTypes from '../actions/login-action-types';

export default function LoadPageReducer(Page = [], action : any) {
  let nextPage = Page;
  switch (action.type) {
    case actionTypes.LOAD_PAGE:
      nextPage = action?.data;
      break;
    default:
      break;
  }
  return nextPage;
}
