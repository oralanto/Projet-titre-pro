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
          type="email"
          label="Email"
          name="email"
        />
        <Field
          type="password"
          label="Mot de passe"
          name="password"
        />
        <Field
          type="text"
          label="Ville"
          name="city"
        />
        <Field
          type="tel"
          label="Téléphone (facultatif)"
          name="phone_number"
        />
        <input type="submit" className="SignIn__form__button" value="Créer mon compte"></input>
      </form>
    </div>
  );
};

SignIn.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

// == Export
export default SignIn;
