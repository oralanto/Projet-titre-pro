/* eslint-disable consistent-return */
import axios from 'axios';
import {
  LOGIN,
  logged,

} from 'src/actions';
/*
import { SET_PSEUDO } from '../actions'; */

const auth = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case LOGIN:

      /* axios.post('http://34.207.234.22/api/login', JSON.stringify({
        email: state.user.email,
        password: state.user.password,
      }),
      {
        headers: {
          'content-type': 'application/json'
        } 
      } 
      ) */
      axios.post('http://34.207.234.22/api/login', JSON.stringify({
        email: state.user.email,
        password: state.user.password,
      }), {
        headers: {
          'content-type': 'application/json'
        }
      })
        .then((result) => {
          store.dispatch(logged(result.data.pseudo));
        })
        .catch(() => 
        console.warn('Erreur d\'authentification'));

      return next(action);
    default:
      next(action);
  }
};

export default auth;
