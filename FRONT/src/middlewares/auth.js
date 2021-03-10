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
          store.dispatch(logged(result.data.pseudo, result.data.accessToken));
        })
        .catch(() =>
          console.warn('Erreur d\'authentification'));
      break;

    case SIGN_IN: {
      const state = store.getState();
      axios.post('http://34.207.234.22/api/signin', JSON.stringify({
        firstname: state.user.firstname,
        lastname: state.user.lastname,
        pseudo: state.user.pseudo,
        email: state.user.email,
        password: state.user.password,
        localisationId: state.user.localisation_id,
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
    }
    case CREATE_ADVERT:
      axios.post('http://34.207.234.22/api/create-advert', JSON.stringify({
        title: state.title,
        gameTitle: state.user.gameTitle,
        locationPrice: state.user.locationPrice,
        gameAvgDuration: state.user.gameAvgDuration,
        advertMinPlayers: state.user.advertMinPlayers,
        advertMaxPlayers: state.user.advertMaxPlayers,
        advertSuggestedAge: state.user.advertSuggestedAge,
        advertImage: state.user.advertImage,
        gameLocalisationId: state.user.gameLocalisationId,
        description: state.user.description,
        gameAuthor: state.user.gameAuthor,
        gameReleaseYear: state.user.ReleaseYear,
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
