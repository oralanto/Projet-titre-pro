// == Import : npm
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from 'src/store';

// == Import : local
// Composants
import App from 'src/components/App';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />;
  </Provider>,
  rootElement,
);
