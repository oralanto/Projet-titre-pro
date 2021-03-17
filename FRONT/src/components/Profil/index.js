// == Import npm
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// == Import
import reactLogo from './react-logo.svg';

import './style.scss';

// == Composant
const Profil = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get('http://34.207.234.22/api/profil')
      .then((res) => setUser(res.data));
  }, []);

  return (
    <div className="profil">
      <div className="profil__picture">
        <h1>Profil</h1>
        <img className="profil__picture__img" src={reactLogo} alt="react logo" />
      </div>
      <div className="profil__info">
        <div className="profil__info__h2"> Pseudo : </div>
        <span className="profil__info__bar"><p>{user.pseudo}</p></span>
        <div className="profil__info__h2"> Nom : </div>
        <span className="profil__info__bar"><p>{user.lastname}</p></span>
        <div className="profil__info__h2"> Prenom : </div>
        <span className="profil__info__bar"><p>{user.firstname}</p></span>
        <div className="profil__info__h2"> Adresse mail : </div>
        <span className="profil__info__bar"><p>{user.email}</p></span>
        <div className="profil__info__h2"> Numero de telephone : </div>
        <span className="profil__info__bar"><p>{user.phoneNumber}</p></span>
        <div className="profil__info__h2"> Ville :</div>
        <span className="profil__info__bar"><p>{user.city}</p></span>
      </div>
      <div className="profil__links">
        <Link
          to="/modifier-profil"
          className="profil__info__buttons"
        > Modifier Profil
        </Link>
        <Link
          to="/user-adverts"
          className="profil__info__buttons"
        > Modifier ses Annonces
        </Link>
        <Link
          to="/supprimer-profil"
          className="profil__info__buttons"
        > Supprimer son profil
        </Link>
      </div>

    </div>
  );
};

// == Export
export default Profil;
