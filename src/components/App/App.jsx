import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import '../../styles/index.scss';
import './style.scss';
import { AboutPage } from '../AboutPage';
import { MainPage } from '../MainPage';
import { AdminPage } from '../AdminPage';

export const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/admin" component={AdminPage} />
    </Switch>
  </>
);

export default App;
