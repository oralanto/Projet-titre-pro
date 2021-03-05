// == Import npm
import React from 'react';
import Field from 'src/containers/Field';

// == Import
import './style.scss';

// == Composant
const Login = () => (
  <div className="SignIn">
    <p className="SignIn__title">Créer un compte</p>
    <form className="SignIn__form">
      <Field
        type="text"
        label="Prénom"
        name="firstname"
      />
      <Field
        type="text"
        label="Nom"
        name="lastname"
      />
      <Field
        type="text"
        label="Pseudo"
        name="pseudo"
      />
      <Field
        type="Email"
        label="email"
        name="email"
      />
      <Field
        type="password"
        label="Mot de passe"
        name="password"
      />
      <Field
        type="text"
        label="Code postal"
        name="localisation_id"
      />
      <Field
        type="tel"
        label="Téléphone (facultatif)"
        name="phone_number"
      />
    </form>
    <button className="SignIn__button" type="button">Créer mon compte</button>
  </div>
);

// == Export
export default Login;
