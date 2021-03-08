import axios from 'axios';
import {
  LOGIN,
  setPseudo,

} from 'src/actions';
/*
import { SET_PSEUDO } from '../actions'; */

const auth = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case LOGIN:

      axios.post('http://localhost:3001/login', {
        email: state.user.email,
        password: state.user.password,
      })
        .then((result) => {
          store.dispacth(setPseudo(result.data.pseudo));
        })
        .catch((err) => console.log('err', err));

      return next(action);

   /*  case SET_PSEUDO: {
      axios.get(`/theme/${email}`)
        .then((result) => {
          store.dispacth(setColor(result.data.color));
        });
      next(action);
      break;
    }, */
    default:
      next(action);
  }
};

export default auth;
