import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from '../Header';
import { Main } from '../Main';
import '../../styles/index.scss';
import './style.scss';

export const App = () => (
  <>
    <Switch>
      <Route exact path />
    </Switch>
    <Header />
    <Main />
  </>
);

export default App;
