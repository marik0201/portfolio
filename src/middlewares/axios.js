import axios from 'axios';
import LocalStorage from '../services/local-storage';
import history from '../helpers/history';
import { getToken } from '../api/auth';

axios.interceptors.response.use(
  response => response,
  async error => {
    try {
      const originalRequest = error.config;

      if (error.response.status === 401) {
        const token = await getToken();
        originalRequest.headers['Authorization'] = `JWT ${token.data.token}`;
        LocalStorage.putTokens(token.data.token, token.data.refreshToken);
        return axios(originalRequest);
      }
    } catch (error) {
      history.push('/login');
    }
  }
);
