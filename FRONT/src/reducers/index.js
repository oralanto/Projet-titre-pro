import { CHANGE_INPUT_VALUE } from 'src/actions';

const initialState = {
  user: {
    firstname: '',
    lastname: '',
    pseudo: '',
    email: '',
    password: '',
    localisation_id: '',
    phone_number: '',
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
    default:
      return state;
  }
};

export default reducer;
