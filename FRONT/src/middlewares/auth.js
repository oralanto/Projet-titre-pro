/* eslint-disable consistent-return */
import axios from 'axios';

import {
  LOGIN,
  SIGN_IN,
  logged,
  CREATE_ADVERT,

} from 'src/actions';

const auth = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case LOGIN:
      axios.post('http://34.207.234.22/api/login', JSON.stringify({
        email: state.user.email,
        password: state.user.password,
      }), {
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((result) => {
          console.log("JWT", result.data.accessToken);
          localStorage.setItem("token", result.data.accessToken);
          localStorage.setItem("pseudo", result.data.pseudo);
          axios.defaults.headers.common.Authorization = `Bearer ${result.data.accessToken}`;
          store.dispatch(logged(result.data.pseudo, result.data.accessToken));
        })
        .catch((error) =>
          console.warn('Erreur d\'authentification', error));
      break;

    case SIGN_IN:
      axios.post('http://34.207.234.22/api/signup', JSON.stringify({
        firstname: state.user.firstname,
        lastname: state.user.lastname,
        pseudo: state.user.pseudo,
        email: state.user.email,
        password: state.user.password,
        city: state.user.city,
        phoneNumber: state.user.phone_number,
      }), {
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((response) => {
          console.log('response', response);
        })
        .catch((err) => console.log('err', err));

      // next(action);
      break;
    case CREATE_ADVERT:
      axios.post('http://34.207.234.22/api/create-advert', JSON.stringify({
        title: state.user.title,
        gameTitle: state.user.gameTitle,
        locationPrice: state.user.locationPrice,
        gameAvgDuration: state.user.gameAvgDuration,
        gameMinPlayers: state.user.gameMinPlayers,
        gameMaxPlayers: state.user.gameMaxPlayers,
        gameSuggestedAge: state.user.gameSuggestedAge,
        advertImage: state.user.advertImage,
        city: state.user.city,
        description: state.user.description,
        gameAuthor: state.user.gameAuthor,
        gameReleaseYear: state.user.ReleaseYear,
        categories: [{ name: state.user.categories }],
      }), {
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((response) => {
          console.log('response', response);
        })
        .catch(() =>
          console.warn("Echec de l'envoi"));
      break;

    default:
      next(action);
  }
};

export default auth;
