import React from 'react';
import GlobalStyle from './GlobalStyle';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import Test from './components/layout/Test';
import Add from './components/layout/Add';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Switch>
          <Route exact path='/test' component={Test} />
          <Route exact path='/add' component={Add} />
        </Switch>
      </main>
    </>
  );
}

export default withRouter(App);
