import {
  CHANGE_INPUT_VALUE,
  LOGIN,
  LOGGED,
  LOGOUT,
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
    default:
      return state;
  }
};

export default reducer;
