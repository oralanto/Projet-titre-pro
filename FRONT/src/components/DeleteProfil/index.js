// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const DeleteProfil = ({
  onSubmitFormAdvert,
  isLogged,
  loggedMessage,
}) => {
  const thisOnSubmit = (event) => {
    event.preventDefault();
    onSubmitFormAdvert();
  };
  return (
    <div className="DeleteProfil">
      {!isLogged && (
        <div className="Login__form__logged">
          <p className="Login__form__message">
            {loggedMessage}
          </p>
        </div>
      )}
      {isLogged && (
        <>
          <h1 className="DeleteProfil__title">Suppression de compte</h1>
          <p className="DeleteProfil__subtitle"> Etes vous sûr de vouloir supprimer définitivement votre compte ?</p>
          <form className="DeleteProfil__form" onSubmit={thisOnSubmit}>
            <input className="DeleteProfil__form__button" type="submit" value="Supprimer" />
          </form>
        </>
      )}
    </div>
  );
};

DeleteProfil.propTypes = {
  isLogged: PropTypes.bool,
  onSubmitFormAdvert: PropTypes.func.isRequired,
  loggedMessage: PropTypes.string,
};
DeleteProfil.defaultProps = {
  loggedMessage: 'Vous devez vous connecter',
  isLogged: false,
};

// == Export
export default DeleteProfil;
