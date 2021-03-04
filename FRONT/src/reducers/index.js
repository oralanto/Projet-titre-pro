const initialState = {
  user: {
    email: 'toto@coucou.com',
    password: 'coucou',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
