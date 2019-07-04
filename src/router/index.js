import React from 'react';

export const ROUTES = [
  {
    id: 1,
    path: '/',
    exact: true,
    component: React.lazy(() =>
      import('../components/MainPage/MainPageContainer')
    )
  },
  {
    id: 2,
    path: '/about',
    exact: false,
    component: React.lazy(() => import('../components/AboutPage'))
  },
  {
    id: 3,
    path: '/admin',
    exact: false,
    withAuth: true,
    component: React.lazy(() => import('../components/AdminPanel'))
  },
  {
    id: 4,
    path: '/login',
    exact: false,
    component: React.lazy(() =>
      import('../components/LoginForm/LoginFormContainer')
    )
  }
];
