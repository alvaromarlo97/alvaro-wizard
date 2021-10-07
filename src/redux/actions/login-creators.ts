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
export function loginUserData(userName : string, userPassword: string, userClue : string) {
  return (dispatch : any) => {
    const User = {
      User: userName,
      Password: userPassword,
      Clue: userClue,
    };
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
      type: actionTypes.LOAD_PAGE,
      data: Page,

    });
  };
}
