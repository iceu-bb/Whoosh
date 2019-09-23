import React, { useEffect, useRef } from 'react';
import GlobalStyle from './GlobalStyle';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/layout/header/Header';
import Test from './components/layout/Test';
import AddCategory from './components/category/AddCategory';
import CategoriesDashboard from './components/category/CategoriesDashboard';
import CardDashboard from './components/card/CardDashboard';
import ModalManager from './redux/modal/ModalManager';
import Hero from './components/layout/hero/Hero';
import WaveContainer from './components/layout/wave/WaveContainer';
import Section1 from './components/layout/section1/Section1';
import Section2 from './components/layout/section2/Section2';
import Goodbye from './components/layout/goodbye/Goodbye';
import SearchCategoryDashboard from './components/category/SearchCategoryDashboard';
import UserDashboard from './components/layout/userSection/UserDashboard';
import UserSettings from './components/layout/userSection/UserSettings';
import UserFaq from './components/layout/userSection/UserFaq';
import Footer from './components/layout/Footer';
import { UserIsAuthenticated } from './redux/auth/authWrapper';

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

const HomeLayout = () => {
  const myRef = useRef(null);
  useEffect(() => {
    scrollToRef(myRef);
  }, []);
  return (
    <main ref={myRef}>
      <Hero />
      <Section1 />
      {/* <CategoriesDashboard /> */}
      <Section2 />
    </main>
  );
};

const Layout2 = ({ location: { pathname } }) => {
  const myRef = useRef(null);
  useEffect(() => {
    scrollToRef(myRef);
  }, [pathname]);

  return (
    <main ref={myRef}>
      <WaveContainer />
      <Switch>
        <Route
          exact
          path='/search'
          component={UserIsAuthenticated(SearchCategoryDashboard)}
        />
        <Route exact path='/add' component={UserIsAuthenticated(AddCategory)} />
        <Route
          exact
          path='/category/:categoryId'
          component={UserIsAuthenticated(CardDashboard)}
        />
        <Route
          exact
          path='/user/my-categories'
          component={UserIsAuthenticated(UserDashboard)}
        />
        <Route
          exact
          path='/user/settings'
          component={UserIsAuthenticated(UserSettings)}
        />
        <Route exact path='/user/faq' component={UserFaq} />
        <Route exact path='/goodbye' component={Goodbye} />
        <Route exact path='/test' component={UserIsAuthenticated(Test)} />
      </Switch>
    </main>
  );
};

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ModalManager />
      <Header />
      <Route exact path='/' component={HomeLayout} />
      <Route exact path='/(.+)' component={Layout2} />
      <Footer />
    </>
  );
};

export default withRouter(App);
