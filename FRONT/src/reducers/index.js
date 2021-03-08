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
    pseudo: '',
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
          pseudo: action.pseudo,
        },
      };
    case LOGGED:
      return {
        ...state,
        user: {
          ...state.user,
          pseudo: action.pseudo,
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
