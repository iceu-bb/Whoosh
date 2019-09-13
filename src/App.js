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

function App() {
  return (
    <>
      <GlobalStyle />
      <ModalManager />
      {/* <Header /> */}
      <main>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* <Hero />
          <Wave />
          <Section1 /> */}
          <Switch>
            <Route exact path='/' component={CategoriesDashboard} />
            <Route exact path='/test' component={Test} />
            <Route
              exact
              path='/category/:categoryId'
              component={CardDashboard}
            />
            <Route
              exact
              path='/add'
              render={() => (
                <>
                  <AddCard />
                  <AddCategory />
                </>
              )}
            />
          </Switch>
        </div>
      </main>
    </>
  );
}

export default withRouter(App);
