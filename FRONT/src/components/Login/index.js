
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Field from 'src/containers/Field';

// == Import
import './style.scss';

// == Composant
const Login = ({
  onSubmitForm,
  isLogged,
  Logouute,
  loading,
  loggedMessage,
}) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();

    onSubmitForm();
  };
  const handleLogout = () => {
    Logouute();
  };
  return (
    <div className="Login">

      {isLogged && (
        <div className="Login__form__logged">
          <p className="Login__form__message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="Login__form__disconnexion"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!isLogged && (
        <div className="Login__isLogged">
          <p className="Login__title">Connexion</p>
          <form className="Login__form" onSubmit={handleOnSubmit}>
            <Field
              type="Email"
              label="Email"
              name="email"
            />
            <Field
              type="password"
              label="password"
              name="password"
            />
            <button type="submit" disabled={loading} className="Login__form__submit">
              {loading ? 'Chargement ...' : 'Envoyer'}
            </button>
          </form>
        </div>
      )}

    </div>
  );
};

Login.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  Logouute: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,

};
Login.defaultProps = {
  isLogged: false,
  loading: false,
  loggedMessage: 'Connecté',
};

// == Export
export default Login;
