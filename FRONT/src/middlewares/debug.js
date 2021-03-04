const debug = (store) => (next) => (action) => {
  console.log('state:', store.getState());
  console.log('action:', action);
  next(action);
};

export default debug;
