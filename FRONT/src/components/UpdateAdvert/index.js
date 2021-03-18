// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';

// == Import
import './style.scss';

// == Composant
const UpdateAdvert = ({
  onSubmitFormAdvert,
  isLogged,
  loggedMessage,
}) => {
  const thisOnSubmit = (event) => {
    event.preventDefault();
    console.log('submit update Advert');
    onSubmitFormAdvert();
  };
  return (
    <div className="UpdateAdvert">
      {!isLogged && (
        <div className="Login__form__logged">
          <p className="Login__form__message">
            {loggedMessage}
          </p>
        </div>
      )}
      {isLogged && (
        <>
          <h1 className="UpdateAdvert__title">Modification d'annonce</h1>
          <p className="UpdateAdvert__subtitle"> Merci de bien remplir toutes les cases pour que votre mise à jour soit prise en compte ;</p>
          <form className="UpdateAdvert__form" onSubmit={thisOnSubmit}>
            <Field
              className="UpdateAdvert__form__title"
              type="text"
              label="Nom de l'annonce"
              name="title"
            />
            <Field
              className="UpdateAdvert__form__title"
              type="text"
              label="Nom du jeu"
              name="gameTitle"
            />
            <Field
              className="UpdateAdvert__form__title"
              type="text"
              label="Prix de la location"
              name="locationPrice"
            />
            <Field
              className="UpdateAdvert__form__title"
              type="text"
              label="Durée moyenne d'une partie :"
              name="gameAvgDuration"
            />
            <Field
              className="UpdateAdvert__form__title"
              type="text"
              label="Nombre de joueurs-min"
              name="gameMinPlayers"
            />
            <Field
              className="UpdateAdvert__form__title"
              type="text"
              label="Nombre de joueurs-max"
              name="gameMaxPlayers"
            />
            <Field
              className="UpdateAdvert__form__title"
              type="text"
              label="Age minimum"
              name="gameSuggestedAge"
            />
            <Field
              className="UpdateAdvert__form__title"
              type="file"
              label="Inserer une image"
              name="advertImage"
            />
            <Field
              className="UpdateAdvert__form__title"
              type="text"
              label="Ville"
              name="city"
            />
            <Field
              className="UpdateAdvert__form__title"
              type="text"
              label="Description complémentaire (recommandé)"
              name="description"
            />
            <Field
              className="UpdateAdvert__form__title"
              type="text"
              label="Auteur :"
              name="gameAuthor"
            />
            <Field
              className="UpdateAdvert__form__title"
              type="text"
              label="categories"
              name="categories"
            />
            <Field
              className="UpdateAdvert__form__title"
              type="text"
              label="Année de sortie:"
              name="gameReleaseYear"
            />
            <input className="UpdateAdvert__form__button" type="submit" />
          </form>
        </>
      )}
    </div>
  );
};

UpdateAdvert.propTypes = {
  isLogged: PropTypes.bool,
  onSubmitFormAdvert: PropTypes.func.isRequired,
  loggedMessage: PropTypes.string,

};
UpdateAdvert.defaultProps = {
  loggedMessage: 'Vous devez vous connecter',
  isLogged: false,
};

// == Export
export default UpdateAdvert;
