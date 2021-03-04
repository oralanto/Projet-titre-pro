/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import npm
import React from 'react';
import Field from 'src/containers/Field';

// == Import
import './style.scss';

// == Composant
const Login = () => (
  <div className="Login">
    <p className="Login__title">Connexion</p>
    <form className="Login__form">
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

// == Export
export default Login;
