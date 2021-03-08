// Middleware de log, son but est juste de faire un console.log de l'action
export default (store) => (next) => (action) => {
  const { type, ...payload } = action;
  console.log(type, payload);

  next(action);
};
