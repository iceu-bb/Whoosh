import React, { useLayoutEffect, useRef, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserIsAuthenticated } from '../redux/auth/authWrapper';
import { scrollToRef } from '../helpers';
import WaveContainer from '../components/layout/wave/WaveContainer';
import { LoadingComponent } from '../components/elements/LoadingComponent';

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
const GoodbyePage = lazy(() => import('../components/layout/Goodbye'));
const NotFoundPage = lazy(() =>
  import('../components/layout/notFound/NotFound')
);

const SecondView = ({ location: { pathname } }) => {
  const myRef = useRef(null);
  useLayoutEffect(() => {
    scrollToRef(myRef);
  }, [pathname]);
  return (
    <main ref={myRef}>
      <WaveContainer />
      <Suspense fallback={<LoadingComponent />}>
        <Switch>
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
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </main>
  );
};

export default SecondView;
