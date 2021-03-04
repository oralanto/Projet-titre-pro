/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import debug from 'src/middlewares/debug';
import auth from 'src/middlewares/auth';
import reducer from 'src/reducers';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(debug, auth),
  ),
);

export default store;
