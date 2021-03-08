// == Import : npm
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from 'src/store';

// == Import : local
// Composants
import App from 'src/components/App';

// == Render
const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />;
  </Provider>,
  rootElement,
);
