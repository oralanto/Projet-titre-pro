import axios from 'axios';
import { LOGIN, SIGN_IN } from 'src/actions';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      console.log('case login');
      const state = store.getState();
      axios.post('http://localhost:3001/login', {
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
      console.log('case sign in');
      const state = store.getState();
      axios.post('http://localhost:3001/signin', {
        firstname: state.user.firstname,
        lastname: state.user.lastname,
        pseudo: state.user.pseudo,
        email: state.user.email,
        password: state.user.password,
        localisation_id: state.user.localisation_id,
        phone_number: state.user.phone_number,
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
