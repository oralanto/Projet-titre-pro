// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';

// == Import
import './style.scss';

// == Composant
const UpdateProfil = ({ 
onSubmitForm,
isLogged,
loggedMessage,
 }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('submit UpdateProfil');
    onSubmitForm();
  };
  return (
    <div className="UpdateProfil">
    {!isLogged && (
      <div className="Login__form__logged">
          <p className="Login__form__message">
            {loggedMessage}
          </p>
        </div>
      )}
      {isLogged && (
        <>
      <p className="UpdateProfil__title">Modifier votre profil</p>
      <form className="UpdateProfil__form" onSubmit={handleOnSubmit}>
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
        <button type="submit" className="UpdateProfil__button">Modifier mon profil</button>
      </form>
      </>
      )}
    </div>
  );
};

UpdateProfil.propTypes = {
  isLogged: PropTypes.bool,
  onSubmitForm: PropTypes.func,
  loggedMessage: PropTypes.string,
};

UpdateProfil.defaultProps = {
  loggedMessage: 'Vous devez vous connecter',
  isLogged: false,
};


// == Export
export default UpdateProfil;
