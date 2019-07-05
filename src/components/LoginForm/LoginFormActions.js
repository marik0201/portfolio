import { userAuth } from '../../services/auth';
import types from './LoginFormTypes';

export const onLoginSuccess = payload => {
  return { type: types.ON_LOGIN_SUCCESS, payload };
};

export const onLoginFailed = payload => {
  return { type: types.ON_LOGIN_SUCCESS, payload };
};

export const signIn = (username, password) => async dispatch => {
  try {
    await userAuth(username, password);
  } catch (error) {
    console.log(error);
  }
};
