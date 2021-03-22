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
          <input
            type="button"
            className="Login__form__submit"
            onClick={handleLogout}
            value="Déconnexion"
          />
        </div>
      )}
      {!isLogged && (
        <div className="Login__isLogged">
          <form className="Login__form" onSubmit={handleOnSubmit}>
            <p className="Login__title">Connexion</p>
            <Field
              className="Login__form__field"
              type="Email"
              label="Email"
              name="email"
            />
            <Field
              className="Login__form__field"
              type="password"
              label="Mot de passe"
              name="password"
            />
            <input
              type="submit"
              disabled={loading}
              className="Login__form__submit"
              value={loading ? 'Chargement ...' : 'Envoyer'}
            />
            <div className="Login__form__OU">OU</div>
            <Link className="link" to="/creer-compte">Créer un compte</Link>
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
  loggedMessage: 'Vous êtes Connecté',
};

// == Export
export default Login;
