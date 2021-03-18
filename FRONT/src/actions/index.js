// Action types
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const LOGIN = 'LOGIN';
export const SET_USER_LOADING_STATE = 'SET_USER_LOADING_STATE';
export const LOGOUT = 'LOGOUT';
export const LOGGED = 'LOGGED';
export const SIGN_IN = 'SIGN_IN';
export const CREATE_ADVERT = 'CREATE_ADVERT';
export const UPDATE_ADVERT = 'UPDATE_ADVERT';
export const DELETE_ADVERT = 'DELETE_ADVERT';
export const UPDATE_PROFIL = 'UPDATE_PROFIL';
export const DELETE_PROFIL = 'DELETE_PROFIL';
export const FETCH_ADVERT_DATA = 'FETCH_ADVERt_DATA';
export const SAVE_ADVERT = 'SAVE_ADVERT';
export const CONTACT = 'CONTACT';
export const ADVERT_CONTACT = 'ADVERT_CONTACT';

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

export const logged = (pseudo, accessToken) => ({
  type: LOGGED,
  pseudo,
  accessToken,
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

export const signIn = () => ({
  type: SIGN_IN,
});

export const createAdvert = () => ({
  type: CREATE_ADVERT,
});

export const updateAdvert = () => ({
  type: UPDATE_ADVERT,
});

export const deleteAdvert = () => ({
  type: DELETE_ADVERT,
});

export const updateProfil = () => ({
  type: UPDATE_PROFIL,
});

export const deleteProfil = () => ({
  type: DELETE_PROFIL,
});

export const fetchAdvertData = () => ({
  type: FETCH_ADVERT_DATA,
});

export const saveAdvert = (data) => ({
  type: SAVE_ADVERT,
  data,
});

export const contact = () => ({
    type: CONTACT,
  }); 

  export const advertContact = (message, advertId) => ({
    type: ADVERT_CONTACT,
    message,
    advertId,
  }); 


