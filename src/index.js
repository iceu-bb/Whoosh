import React from 'react';
import { render } from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

const rootEl = document.getElementById('root');

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootEl
);
