/* eslint-disable consistent-return */
import axios from 'axios';

import {
  FETCH_ADVERT_DATA,
  saveAdvert,
} from 'src/actions';

const advert = (store) => (next) => (action) => {
  const state = store.getState();
  console.log('middleware');
  switch (action.type) {
    case FETCH_ADVERT_DATA:
      console.log('middleware case FETCH_ADVERT_DATA', window.location.pathname);
      axios
        .get(`http://34.207.234.22/api${window.location.pathname}`)
        .then((res) => state.dispatch(saveAdvert(res.data)));
      break;
    default:
      next(action);
  }
};

export default advert;
