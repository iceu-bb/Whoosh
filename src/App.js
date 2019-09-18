import React from 'react';
import GlobalStyle from './GlobalStyle';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/layout/header/Header';
import Test from './components/layout/Test';
import AddCard from './components/card/AddCard';
import AddCategory from './components/category/AddCategory';
import CategoriesDashboard from './components/category/CategoriesDashboard';
import CardDashboard from './components/card/CardDashboard';
import ModalManager from './redux/modal/ModalManager';
import Hero from './components/layout/hero/Hero';
import Wave from './components/layout/Wave';
import Section1 from './components/layout/section1/Section1';
import Section2 from './components/layout/section2/Section2';
import Goodbye from './components/layout/goodbye/Goodbye';
import SearchCategoryDashboard from './components/category/SearchCategoryDashboard';
import UserDashboard from './components/layout/userSection/UserDashboard';
import UserSettings from './components/layout/userSection/UserSettings';
import UserFaq from './components/layout/userSection/UserFaq';
import Footer from './components/layout/Footer';
import { UserIsAuthenticated } from './redux/auth/authWrapper';

function App() {
  return (
    <>
      <GlobalStyle />
      <ModalManager />
      <Header />
      <main>
        <Hero />
        <Wave trend='up' />
        <div style={{ width: '100vw', backgroundColor: 'white' }}>
          {/* <div style={{ maxWidth: '1200px', margin: '0 auto' }}> */}
          <Section1 />
          <Switch>
            <Route exact path='/' component={CategoriesDashboard} />
            <Route exact path='/test' component={UserIsAuthenticated(Test)} />
            <Route
              exact
              path='/search'
              component={UserIsAuthenticated(SearchCategoryDashboard)}
            />
            <Route exact path='/user/my-categories' component={UserDashboard} />
            <Route
              exact
              path='/user/settings'
              component={UserIsAuthenticated(UserSettings)}
            />
            <Route
              exact
              path='/user/faq'
              component={UserIsAuthenticated(UserFaq)}
            />
            <Route
              exact
              path='/category/:categoryId'
              component={CardDashboard}
            />
            <Route
              exact
              path='/add'
              component={UserIsAuthenticated(AddCategory)}
            />
          </Switch>
          <Section2 />
          {/* <Goodbye /> */}
          <Footer />
          {/* </div> */}
        </div>
      </main>
    </>
  );
}

export default withRouter(App);
