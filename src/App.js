import React, { useLayoutEffect, lazy, Suspense } from 'react';
import GlobalStyle from './GlobalStyle';
import { Route, withRouter } from 'react-router-dom';
import ModalManager from './redux/modal/ModalManager';
const HomeView = lazy(() => import('./views/HomeView'));
const SecondView = lazy(() => import('./views/SecondView'));

const App = ({ location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <GlobalStyle />
      <ModalManager />
      <Suspense fallback={<div>fall</div>}>
        <Route exact path='/' component={HomeView} />
        <Route exact path='/(.+)' component={SecondView} />
      </Suspense>
    </>
  );
};

export default withRouter(App);
