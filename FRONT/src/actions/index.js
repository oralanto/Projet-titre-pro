// Action types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const LOGIN = 'LOGIN';
export const SET_PSEUDO = 'SET_PSEUDO';
export const SET_USER_LOADING_STATE = 'SET_USER_LOADING_STATE';
export const LOGOUT = 'LOGOUT';
export const LOGGED = 'LOGGED';

// Action creators
export const changeInputValue = (value, name) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  name,
});

export const login = () => ({
  type: LOGIN,
});

// Fonction permettant de mettre a jour le statut connecté du user

export const logged = (pseudo) => ({
  type: LOGGED,
  pseudo,
});

export const setPseudo = (pseudo) => ({
  type: SET_PSEUDO,
  pseudo,
});

/**
 * Action permettant de mettre à jour isLogged à false dans le store
 */
export const logout = () => ({
  type: LOGOUT,
});

/**
 * Action permettant de mettre le formulaire de connexion en loading
 */
export const setUserLoadingState = (loading) => ({
  type: SET_USER_LOADING_STATE,
  loading,
});
