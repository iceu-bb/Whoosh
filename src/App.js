import React from 'react';
import GlobalStyle from './GlobalStyle';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Test from './components/layout/Test';
import AddCard from './components/card/AddCard';
import AddCategory from './components/category/AddCategory';
import CategoriesDashboard from './components/category/CategoriesDashboard';
import CardDashboard from './components/card/CardDashboard';
import ModalManager from './redux/modal/ModalManager';

function App() {
  return (
    <>
      <GlobalStyle />
      <ModalManager />
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={CategoriesDashboard} />
          <Route exact path='/test' component={Test} />
          <Route exact path='/category/:categoryId' component={CardDashboard} />
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
      </main>
    </>
  );
}

export default withRouter(App);
