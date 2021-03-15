import {
  CHANGE_INPUT_VALUE,
  LOGIN,
  LOGGED,
  LOGOUT,
  SAVE_ADVERT,
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
    localisation_id: '',
    phone_number: '',
    accessToken: '',
  },
  advert: {},
};

const reducer = (state = initialState, action = {}) => {
  console.log('reducer');
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
        },
      };
    case LOGGED:
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
      console.log('Reducer case SAVE_ADVERT :', action.data);
      return {
        ...state.advert,
        advert: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
