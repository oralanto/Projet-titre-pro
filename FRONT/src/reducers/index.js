import {
  CHANGE_INPUT_VALUE,
  LOGIN,
  LOGGED,
  LOGOUT,
} from 'src/actions';

const initialState = {
  user: {
    email: '',
    password: '',
    isLogged: false,
    loading: false,
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
          loading: true,

        },
        onLogin: 'LOGGED_IN',
      };
    case LOGGED:
      return {
        ...state,
        loading: false,
        isLogged: true,
        pseudo: action.pseudo,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        pseudo: null,
      };
    default:
      return state;
  }
};

export default reducer;
