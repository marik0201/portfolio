import { signIn } from '../api/auth';
import LocalStorage from './local-storage';
import cogoToast from 'cogo-toast';
import history from '../helpers/history';

export const userAuth = async (login, password) => {
  try {
    const user = await signIn(login, password);
    const { token, refreshToken } = user.data;

    await LocalStorage.putTokens(token, refreshToken);

    history.push('/admin');
  } catch (error) {
    cogoToast.error(error.response.data.message);
  }
};
