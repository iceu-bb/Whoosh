import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './redux/configureStore.js';
import App from './App';

const store = configureStore();
const rootEl = document.getElementById('root');

store.firebaseAuthIsReady.then(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootEl
  );
});
