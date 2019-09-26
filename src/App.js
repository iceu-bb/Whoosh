import React, { useLayoutEffect, lazy, Suspense } from 'react';
import { Route, withRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import ModalManager from './redux/modal/ModalManager';
import { LoadingComponent } from './components/elements/LoadingComponent';
import ErrorBoundary from './components/layout/notFound/ErrorBoundary';
import Header from './components/layout/header/Header';
import Footer from './components/layout/Footer';
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
      <ErrorBoundary>
        <Suspense fallback={<LoadingComponent />}>
          <Header />
          <Route exact path='/' component={HomeView} />
          <Route path='/(.+)' component={SecondView} />
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default withRouter(App);
