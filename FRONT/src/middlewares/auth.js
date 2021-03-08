import axios from 'axios';
import { LOGIN, SIGN_IN } from 'src/actions';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      axios.post('http://34.207.234.22/api/login', {
        email: state.user.email,
        password: state.user.password,
      })
        .then((response) => {
          console.log('response', response);
        })
        .catch((err) => console.log('err', err));

      // next(action);
      break;
    }
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
    default:
      next(action);
  }
};

export default auth;
