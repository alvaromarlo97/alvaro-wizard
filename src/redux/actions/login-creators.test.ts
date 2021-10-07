import loginListActions from './login-action-types';
import loadAge, { loginUserData, loadPage } from './login-creators';

describe('Given a loadAge function', () => {
  describe('When it is triggered', () => {
    describe('And is resolved', () => {
      test('Then dispatch should have been called with type LOAD_AGE', async () => {
        const dispatch = jest.fn();
        await loadAge(true)(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
          type: loginListActions.LOAD_AGE,
          data: true,
        });
      });
    });
  });
});
describe('Given a loginUserData function', () => {
  describe('When it is triggered', () => {
    describe('And is resolved', () => {
      test('Then dispatch should have been called with type LOAD_USER', async () => {
        const dispatch = jest.fn();
        await loginUserData('Alvaro', '1234ABC', 'hola')(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
          type: loginListActions.LOAD_USER,
          data: {
            User: 'Alvaro',
            Password: '1234ABC',
            Clue: 'hola',
          },
        });
      });
    });
  });
});
describe('Given a loadPage function', () => {
  describe('When it is triggered', () => {
    describe('And is resolved', () => {
      test('Then dispatch should have been called with type LOAD_PAGE', async () => {
        const dispatch = jest.fn();
        await loadPage(2)(dispatch);

        expect(dispatch).toHaveBeenCalledWith({
          type: loginListActions.LOAD_PAGE,
          data: 2,
        });
      });
    });
  });
});
