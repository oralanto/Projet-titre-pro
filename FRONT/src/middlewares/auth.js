

/* eslint-disable consistent-return */
import axios from 'axios';
import {
  LOGIN,
  SIGN_IN,
  logged,
  //CREATE_ADVERT,
  UPDATE_ADVERT,
  DELETE_ADVERT,
  UPDATE_PROFIL,
  DELETE_PROFIL,
  CONTACT,
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
          localStorage.setItem('token', result.data.accessToken);
          localStorage.setItem('pseudo', result.data.pseudo);
          axios.defaults.headers.common.Authorization = `Bearer ${result.data.accessToken}`;
          store.dispatch(logged(result.data.pseudo, result.data.accessToken));
          alert(`Bonjour ${result.data.pseudo}`);
        })
        .catch((error) => {
          console.warn('Erreur d\'authentification', error);
          alert('Erreur d\'authentification');
        });
      break;
    case SIGN_IN: {
      const state = store.getState();
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
          alert(`Bienvenue ${response.data.pseudo}`);
        })
        .catch((err) => {
          console.log('err', err);
          alert('Veuillez bien remplir tous les champs');
        });
      break;
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
          alert('Votre profil est à jour');
        })
        .catch(() =>
          console.warn("Echec de l'envoi"));
      break;
    case DELETE_PROFIL:
      axios.delete('http://34.207.234.22/api/profil')
        .then((response) => {
          localStorage.clear();
          console.log('response', response);
          alert('Votre profil est désormais supprimé');
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
          'content-type': 'application/json',
        },
      })
        .then((response) => {
          console.log('response', response);
          alert('Votre annonce est maintenant en ligne');
        })
        .catch(() => alert("Echec de l'envoi"));
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
          alert('Votre annonce a été mise à jour');
        })
        .catch(() => console.warn("Echec de l'envoi"));
      break;

    case DELETE_ADVERT:
      axios.delete('http://34.207.234.22/api/adverts/:id')
        .then((response) => {
          console.log('response', response);
          alert('Votre annonce est désormais supprimé');
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
          alert('Votre message a bien été envoyé');
        })
        .catch(() => alert("Echec de l'envoi"));
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
          alert('Votre message a bien été envoyé');
        })
        .catch(() => alert("Echec de l'envoi"));
    default:
      next(action);
  }
};
export default auth;
