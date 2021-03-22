// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.scss';

// == Composant
const DeleteAdvert = ({
  onSubmitFormAdvert,
  isLogged,
  loggedMessage,
}) => {
  const thisOnSubmit = (event) => {
    event.preventDefault();
    onSubmitFormAdvert();
  };
  return (
    <div className="DeleteAdvert">
      {!isLogged && (
        <div className="Login__form__logged">
          <p className="Login__form__message">
            {loggedMessage}
          </p>
        </div>
      )}
      {isLogged && (
        <>
          <h1 className="DeleteAdvert__title">Suppression d'annonce</h1>
          <p className="DeleteAdvert__subtitle"> Etes vous sûr de vouloir supprimer définitivement votre annonce ?</p>
          <form className="DeleteAdvert__form" onSubmit={thisOnSubmit}>
            <input className="DeleteAdvert__form__button" type="submit" value="supprimer" />
          </form>
        </>
      )}
    </div>
  );
};

DeleteAdvert.propTypes = {
  isLogged: PropTypes.bool,
  onSubmitFormAdvert: PropTypes.func.isRequired,
  loggedMessage: PropTypes.string,

};
DeleteAdvert.defaultProps = {
  loggedMessage: 'Vous devez vous connecter',
  isLogged: false,
};

// == Export
export default DeleteAdvert;
