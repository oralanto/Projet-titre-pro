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
              className="UpdateProfil__field"
              type="text"
              label="Prénom"
              name="firstname"
            />
            <Field
              className="UpdateProfil__field"
              type="text"
              label="Nom"
              name="lastname"
            />
            <Field
              className="UpdateProfil__field"
              type="text"
              label="Pseudo"
              name="pseudo"
            />
            <Field
              className="UpdateProfil__field"
              type="Email"
              label="Email"
              name="email"
            />
            <Field
              className="UpdateProfil__field"
              type="password"
              label="Mot de passe"
              name="password"
            />
            <Field
              className="UpdateProfil__field"
              type="text"
              label="Ville"
              name="localisation_id"
            />
            <Field
              className="UpdateProfil__field"
              type="tel"
              label="Téléphone (facultatif)"
              name="phone_number"
            />
            <button type="submit" className="UpdateProfil__form__button">Modifier mon profil</button>
          </form>
        </>
      )}
    </div>
  );
};

UpdateProfil.propTypes = {
  isLogged: PropTypes.bool,
  onSubmitForm: PropTypes.func.isRequired,
  loggedMessage: PropTypes.string,
};

UpdateProfil.defaultProps = {
  loggedMessage: 'Vous devez vous connecter',
  isLogged: false,
};

// == Export
export default UpdateProfil;
