// == Import npm
import React from 'react';

// == Import
import reactLogo from './react-logo.svg';
import './style.scss';

// == Composant
const Profil = () => (
  <div className="profil">
    <div className="profil__picture">
      <h1>Profil</h1>
      <img className="profil__picture__img" src={reactLogo} alt="react logo" />
    </div>
    <div className="profil__info">
      <p> Pseudo</p>
      <input className="profil__info__bar" placeholder=" Ecrivez ici..." type="text" />
      <p> Nom</p>
      <input className="profil__info__bar" placeholder=" Ecrivez ici..." type="text" />
      <p> Prenom</p>
      <input className="profil__info__bar" placeholder=" Ecrivez ici..." type="text" />
      <p> Adresse</p>
      <input className="profil__info__bar" placeholder=" Ecrivez ici..." type="text" />
      <p> Numero de telephone</p>
      <input className="profil__info__bar" placeholder=" Ecrivez ici..." type="text" />
    </div>

  </div>
);

// == Export
export default Profil;
