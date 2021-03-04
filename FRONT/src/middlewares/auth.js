import axios from 'axios';
import { LOGIN } from 'src/actions';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
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
    default:
      next(action);
  }
};

export default auth;
