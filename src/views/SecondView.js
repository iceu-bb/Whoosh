import React, { useLayoutEffect, useRef, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserIsAuthenticated } from '../redux/auth/authWrapper';
import Header from '../components/layout/header/Header';
import WaveContainer from '../components/layout/wave/WaveContainer';
import Footer from '../components/layout/Footer';

const SearchPage = lazy(() =>
  import('../components/category/SearchCategoryDashboard')
);
const AddPage = lazy(() => import('../components/category/AddCategory'));
const CardsPage = lazy(() => import('../components/card/CardDashboard'));
const UserCategoriesPage = lazy(() =>
  import('../components/layout/userSection/UserDashboard')
);
const UserSettingsPage = lazy(() =>
  import('../components/layout/userSection/UserSettings')
);
const UserFaqPage = lazy(() =>
  import('../components/layout/userSection/UserFaq')
);
const GoodbyePage = lazy(() => import('../components/layout/goodbye/Goodbye'));

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

const SecondView = ({ location: { pathname } }) => {
  const myRef = useRef(null);
  useLayoutEffect(() => {
    scrollToRef(myRef);
  }, [pathname]);
  return (
    <>
      <Header />
      <main ref={myRef}>
        <WaveContainer />
        <Switch>
          <Suspense fallback={<div>fall</div>}>
            <Route
              exact
              path='/search'
              component={UserIsAuthenticated(SearchPage)}
            />
            <Route exact path='/add' component={UserIsAuthenticated(AddPage)} />
            <Route
              exact
              path='/category/:categoryId'
              component={UserIsAuthenticated(CardsPage)}
            />
            <Route
              exact
              path='/user/my-categories'
              component={UserIsAuthenticated(UserCategoriesPage)}
            />
            <Route
              exact
              path='/user/settings'
              component={UserIsAuthenticated(UserSettingsPage)}
            />
            <Route exact path='/user/faq' component={UserFaqPage} />
            <Route exact path='/goodbye' component={GoodbyePage} />
          </Suspense>
        </Switch>
      </main>
      <Footer />
    </>
  );
};

export default SecondView;
