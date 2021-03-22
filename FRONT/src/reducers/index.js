import axios from 'axios';

import {
  CHANGE_INPUT_VALUE,
  LOGIN,
  LOGGED,
  LOGOUT,
  SAVE_ADVERT,
  DELETE_PROFIL,
} from 'src/actions';

const initialState = {
  user: {
    firstname: '',
    lastname: '',
    pseudo: '',
    email: '',
    password: '',
    isLogged: false,
    loading: false,
    city: '',
    phone_number: '',
    accessToken: '',
  },
  advert: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        user: {
          ...state.user,
          [action.name]: action.value,
        },
      };
    case LOGIN:
      return {
        ...state,
        user: {
          ...state.user,
          pseudo: action.pseudo,
          isLogged: true,
        },
      };
    case LOGGED:
      axios.defaults.headers.common.Authorization = `Bearer ${action.accessToken}`;
      return {
        ...state,
        user: {
          ...state.user,
          pseudo: action.pseudo,
          accessToken: action.accessToken,
          isLogged: true,
        },
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    case SAVE_ADVERT:
      return {
        ...state.advert,
        advert: action.data,
      };
    case DELETE_PROFIL:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
