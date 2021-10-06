import actionTypes from './login-action-types';

export default function loadAge(validation: any) {
  return (dispatch : any) => {
    const Age = validation;
    dispatch({
      type: actionTypes.LOAD_AGE,
      data: Age,

    });
  };
}
export function loginUserData(userData: any) {
  return (dispatch : any) => {
    const User = userData;
    dispatch({
      type: actionTypes.LOAD_USER,
      data: User,

    });
  };
}
export function loadPage(page: any) {
  return (dispatch : any) => {
    const Page = page;
    dispatch({
      type: actionTypes.LOAD_USER,
      data: Page,

    });
  };
}
