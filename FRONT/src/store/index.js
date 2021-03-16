/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import debug from 'src/middlewares/debug';
import advert from 'src/middlewares/advert';
import auth from 'src/middlewares/auth';
import log from 'src/middlewares/log';
import reducer from 'src/reducers';


const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(debug, auth, log, advert),
  ),
);


export default store;
