import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';

// == Import
import './style.scss';

// == Composant
const Login = ({ onSubmitForm }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
    onSubmitForm();
  };
  return (
    <div className="Login">
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
        <button type="submit" className="Login__form__submit">Se connecter</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

// == Export
export default Login;
