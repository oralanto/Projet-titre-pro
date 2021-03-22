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
      <form className="SignIn__form" onSubmit={handleOnSubmit}>
        <p className="SignIn__title">Créer un compte</p>
        <Field
          className="SignIn__form__field"
          type="text"
          label="Prénom"
          name="firstname"
        />
        <Field
          className="SignIn__form__field"
          type="text"
          label="Nom"
          name="lastname"
        />
        <Field
          className="SignIn__form__field"
          type="text"
          label="Pseudo"
          name="pseudo"
        />
        <Field
          className="SignIn__form__field"
          type="email"
          label="Email"
          name="email"
        />
        <Field
          className="SignIn__form__field"
          type="password"
          label="Mot de passe"
          name="password"
        />
        <Field
          className="SignIn__form__field"
          type="text"
          label="Ville"
          name="city"
        />
        <Field
          className="SignIn__form__field"
          type="tel"
          label="Téléphone (facultatif)"
          name="phone_number"
        />
        <input
          type="submit"
          className="SignIn__form__button"
          value="Créer mon compte"
        />
      </form>
    </div>
  );
};

SignIn.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

// == Export
export default SignIn;
