import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../../styles/index.scss';
import './style.scss';

const AboutPage = React.lazy(() => {
  return Promise.all([
    import('../AboutPage'),
    new Promise(resolve => setTimeout(resolve, 2 * 1000))
  ]).then(([moduleExports]) => moduleExports);
});
const MainPageContainer = React.lazy(() => {
  return Promise.all([
    import('../MainPage/MainPageContainer'),
    new Promise(resolve => setTimeout(resolve, 1 * 1000))
  ]).then(([moduleExports]) => moduleExports);
});
const AdminPage = React.lazy(() => import('../AdminPage'));

export const App = () => (
  <>
    <Suspense
      fallback={<div className="preloader" data-uk-spinner="ratio: 3" />}
    >
      <Switch>
        <Route exact path="/" component={MainPageContainer} />
        <Route path="/about" component={AboutPage} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
