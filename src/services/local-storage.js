export default class LocalStorage {
  static putTokens = (token, refreshToken) => {
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
  };

  static removeTokens = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  };

  static isLogin = () =>
    localStorage.getItem('token') && localStorage.getItem('refreshToken');

  static getToken = () => localStorage.getItem('token');

  static getRefreshToken = () => localStorage.getItem('refreshToken');
}
