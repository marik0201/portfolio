import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from '../../router';
import '../../styles/index.scss';
import './style.scss';

export const App = () => (
  <>
    <Suspense
      fallback={<div className="preloader" data-uk-spinner="ratio: 3" />}
    >
      <Switch>
        {ROUTES.map(route => (
          <Route
            key={route['id']}
            exact={route['exact']}
            path={route['path']}
            component={route['component']}
          />
        ))}
      </Switch>
    </Suspense>
  </>
);
