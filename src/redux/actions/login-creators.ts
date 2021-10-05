import actionTypes from './login-action-types';

export default function loadAge(validation: any) {
  return (dispatch : any) => {
    const Age = validation;
    console.log(Age);
    dispatch({
      type: actionTypes.LOAD_AGE,
      data: Age,

    });
  };
}
