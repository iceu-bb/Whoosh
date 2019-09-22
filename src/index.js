import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './redux/configureStore.js';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import App from './App';

const store = configureStore();
const rootEl = document.getElementById('root');

store.firebaseAuthIsReady.then(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <ReduxToastr
          timeOut={2000}
          newestOnTop={false}
          position='bottom-right'
          transitionIn='fadeIn'
          transitionOut='fadeOut'
          closeOnToastrClick
        />
        <App />
      </BrowserRouter>
    </Provider>,
    rootEl
  );
});
