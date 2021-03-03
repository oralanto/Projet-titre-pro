// == Import npm
import React from 'react';

// == Import
import './style.scss';

// == Composant
const CreateAdvert = () => (
  <div className="CreateAdvert">
  <h1 className="CreateAdvert__title">Création d'annonce</h1>
   <p className="CreateAdvert__subtitle"> Mieux vous décrirez votre jeu, plus vous aurez de chances de le louer</p>
  <form className="CreateAdvert__form" action="">
    <p className="CreateAdvert__form__title" >Nom du jeu :</p>
    <input className="CreateAdvert__form__input" placeholder="7 Wonders, Monopoly..." type="text" />
    <p className="CreateAdvert__form__title">Durée moyenne d'une partie :</p>
    <input className="CreateAdvert__form__input" placeholder="60" type="text" /><p className="CreateAdvert__form__title">minutes</p>
    <p className="CreateAdvert__form__title">Nombre de joueurs</p>
    <p className="CreateAdvert__form__title">Minimum</p><input className="CreateAdvert__form__input" placeholder="1" type="text" />
    <p className="CreateAdvert__form__title">Maximum</p><input className="CreateAdvert__form__input" placeholder="99" type="text" />
    <p className="CreateAdvert__form__title">Age minimum :</p>
    <input className="CreateAdvert__form__input" placeholder="3" type="text" value="ans" /><p>ans</p>
    <p className="CreateAdvert__form__title">Ajouter une catégorie :</p>
    <input className="CreateAdvert__form__input" placeholder="Stratégie" type="text"/>
    <input className="CreateAdvert__form__input" placeholder="En Famille" type="text"/>
    <input className="CreateAdvert__form__input" placeholder="Ambiance" type="text"/>
    <p className="CreateAdvert__form__title">Ville :</p>
    <input className="CreateAdvert__form__input" placeholder="Paris" type="text"/>
    <p className="CreateAdvert__form__title">Code Postal :</p>
    <input className="CreateAdvert__form__input" placeholder="75001" type="text"/>
    <p>Ajouter une photo (recommandé)</p>
    <input type="file" accept="image/png, image/jpeg"></input>
    <p className="CreateAdvert__form__title">Description complémentaire (recommandé)</p>
    <textarea className="CreateAdvert__form__textarea" placeholder="Etat, durée de disponibilité, pièces manquantes..." type="textarea" />
    <p>Informations facultatives</p>
    <p className="CreateAdvert__form__title">Auteur :</p> <input className="CreateAdvert__form__input" placeholder="Jacques Chirac" type="text"/>
    <p className="CreateAdvert__form__title">Année :</p> <input className="CreateAdvert__form__input" placeholder="2021" type="text"/>
    <input className="CreateAdvert__form__button" type="submit" value="Poster votre annonce" />
  </form>
 
</div>

);

// == Export
export default CreateAdvert;
