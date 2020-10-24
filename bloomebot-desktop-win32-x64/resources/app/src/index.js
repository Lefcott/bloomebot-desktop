import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';

import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './store';
import Routes from './routes';
import Theme from './theme';

const root = document.getElementById('root');

root.style.width = '100%';
root.style.height = '100%';
document.title = 'BloomeBOT Hacks';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <Routes />
    </ThemeProvider>
  </Provider>,
  root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
