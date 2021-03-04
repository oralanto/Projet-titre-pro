import { CHANGE_INPUT_VALUE } from 'src/actions';

const initialState = {
  user: {
    email: 'toto@coucou.com',
    password: 'coucou',
  },
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
    default:
      return state;
  }
};

export default reducer;
