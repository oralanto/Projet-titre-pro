// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';

// == Import
import './style.scss';

// == Composant
const CreateAdvert = ({ onSubmitFormAdvert }) => {
  const thisOnSubmit = (event) => {
    event.preventDefault();
    console.log('submit create Advert');
    onSubmitFormAdvert();
  };
  return (
    <div className="CreateAdvert">
      <h1 className="CreateAdvert__title">Création d'annonce</h1>
      <p className="CreateAdvert__subtitle"> Mieux vous décrirez votre jeu, plus vous aurez de chances de le louer</p>
      <form className="CreateAdvert__form" onSubmit={thisOnSubmit}>
        <Field className="CreateAdvert__form__title"
          type="text"
          label="Nom de l'annonce"
          name="title"
        />
        <Field className="CreateAdvert__form__title"
          type="text"
          label="Nom du jeu"
          name="gameTitle"
        />
        <Field className="CreateAdvert__form__title"
          type="text"
          label="Prix de la location"
          name="locationPrice"
        />
        <Field className="CreateAdvert__form__title"
          type="text"
          label="Durée moyenne d'une partie :"
          name="gameAvgDuration"
        />
        <Field className="CreateAdvert__form__title"
          type="text"
          label="Nombre de joueurs-min"
          name="advertMinPlayers"
        />
        <Field className="CreateAdvert__form__title"
          type="text"
          label="Nombre de joueurs-max"
          name="advertMaxPlayers"
        />
        <Field className="CreateAdvert__form__title"
          type="text"
          label="Age minimum"
          name="advertSuggestedAge"
        />
        <Field className="CreateAdvert__form__title"
          type="file"
          label="Inserer une image"
          name="advertImage"
        />
        <Field className="CreateAdvert__form__title"
          type="text"
          label="Ville"
          name="gameLocalisationId"
        />
        <Field className="CreateAdvert__form__title"
          type="text"
          label="Description complémentaire (recommandé)"
          name="description"
        />
        <Field className="CreateAdvert__form__title"
          type="text"
          label="Auteur :"
          name="gameAuthor"
        />
        <Field className="CreateAdvert__form__title"
          type="text"
          label="Année de sortie:"
          name="gameReleaseYear"
        />
        <input className="CreateAdvert__form__button" type="submit" />
      </form>

    </div>
  );
};

CreateAdvert.propTypes = {
  onSubmitFormAdvert: PropTypes.func.isRequired,
};

// == Export
export default CreateAdvert;
