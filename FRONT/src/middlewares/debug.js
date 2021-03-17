const debug = (store) => (next) => (action) => {
  next(action);
};

export default debug;
