/* eslint-disable consistent-return */
import axios from 'axios';

import {
  LOGIN,
  SIGN_IN,
  logged,
  CREATE_ADVERT,
  UPDATE_ADVERT,
  DELETE_ADVERT,
  UPDATE_PROFIL,
  DELETE_PROFIL,
  CONTACT,
  ADVERT_CONTACT,

} from 'src/actions';

const auth = (store) => (next) => (action) => {
  const state = store.getState();
  /* const send = () => {
    const categories = [{ name: state.user.categories }];
    const data = new FormData();
    data.append('title', state.user.title);
    data.append('gameTitle', state.user.gameTitle);
    data.append('locationPrice', state.user.locationPrice);
    data.append('gameAvgDuration', state.user.gameAvgDuration);
    data.append('gameMinPlayers', state.user.gameMinPlayers);
    data.append('gameMaxPlayers', state.user.gameMaxPlayers);
    data.append('gameSuggestedAge', state.user.gameSuggestedAge);
    data.append('image', state.user.advertImage);
    data.append('gameAuthor', state.user.gameAuthor);
    data.append('gameReleaseYear', state.user.gameReleaseYear);
    data.append('city', state.user.city);
    data.append('description', state.user.description);
    data.append('categories', JSON.stringify(categories));
    return data;
  };
 */
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
          console.log('JWT', result.data.accessToken);
          localStorage.setItem('token', result.data.accessToken);
          localStorage.setItem('pseudo', result.data.pseudo);
          store.dispatch(logged(result.data.pseudo, result.data.accessToken));
        })
        .catch((error) => console.warn('Erreur d\'authentification', error));
      break;

    case SIGN_IN: {
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
      break;
    /* case CREATE_ADVERT:
      axios.post('http://34.207.234.22/api/create-advert', send(), {
    }

    case UPDATE_PROFIL:
      axios.patch('http://34.207.234.22/api/profil', JSON.stringify({
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
        .catch(() => console.warn("Echec de l'envoi"));
      break;

    case DELETE_PROFIL:
      axios.delete('http://34.207.234.22/api/profil')
        .then((response) => {
          localStorage.clear();
          console.log('response', response);
          next(action);
        })
        .catch(() => console.warn("Echec de l'envoi"));
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
          'content-type': 'multipart/form-data',
        },
      })
        .then((response) => {
          console.log('response', response);
        })
        .catch(() =>
          console.warn("Echec de l'envoi"));
      break; */
        .catch(() => console.warn("Echec de l'envoi"));
      break;

    case UPDATE_ADVERT:
      axios.patch('http://34.207.234.22/api/adverts/:id/update', JSON.stringify({
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
        .catch(() => console.warn("Echec de l'envoi"));
      break;

    case DELETE_ADVERT:
      axios.delete('http://34.207.234.22/api/adverts/:id')
        .then((response) => {
          console.log('response', response);
        })
        .catch(() => console.warn("Echec de l'envoi"));
      break;
    case CONTACT:
      axios.post('http://34.207.234.22/api/contactus', JSON.stringify({
        firstname: state.user.firstname,
        lastname: state.user.lastname,
        email: state.user.email,
        phoneNumber: state.user.phoneNumber,
        message: state.user.message,
      }), {
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((response) => {
          console.log('response', response);
        })
        .catch(() => console.warn("Echec de l'envoi"));
      break;
    case ADVERT_CONTACT:
      axios.post('http://34.207.234.22/api/mailing', {
        advertId: action.advertId,
        message: action.message,
      }, {
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((response) => {
          console.log('response', response);
        })
        .catch((error) => console.warn("Echec de l'envoi", error));
      break;
    default:
      next(action);
  }
};

export default auth;
