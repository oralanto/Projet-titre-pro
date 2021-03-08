// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';

// == Import
import './style.scss';

// == Composant
const SignIn = ({ onSubmitForm }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('submit SignIn');
    onSubmitForm();
  };
  return (
    <div className="SignIn">
      <p className="SignIn__title">Créer un compte</p>
      <form className="SignIn__form" onSubmit={handleOnSubmit}>
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
          label="localisation Id (1-5)"
          name="localisation_id"
        />
        <Field
          type="tel"
          label="Téléphone (facultatif)"
          name="phone_number"
        />
        <button type="submit" className="SignIn__button">Créer mon compte</button>
      </form>
    </div>
  );
};

SignIn.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

// == Export
export default SignIn;
