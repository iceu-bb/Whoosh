import React from 'react';
import GlobalStyle from './GlobalStyle';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Test from './components/layout/Test';
import AddCard from './components/layout/AddCard';
import CardDashboard from './components/layout/CardDashboard';
import ModalManager from './redux/modal/ModalManager';

function App() {
  return (
    <>
      <GlobalStyle />
      <ModalManager />
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={CardDashboard} />
          <Route exact path='/test' component={Test} />
          <Route exact path='/add' component={AddCard} />
        </Switch>
      </main>
    </>
  );
}

export default withRouter(App);
