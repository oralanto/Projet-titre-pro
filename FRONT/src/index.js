// == Import : npm
import React from 'react';
import ReactDOM from 'react-dom';
import{ logged } from 'src/actions';
import { Provider } from 'react-redux';
import store from 'src/store';

// == Import : local
// Composants
import App from 'src/components/App';

const accessToken = localStorage.getItem('token');
const pseudo = localStorage.getItem('pseudo');
if (accessToken && pseudo) {
  store.dispatch(logged(pseudo, accessToken));
}

// == Render
const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
);
