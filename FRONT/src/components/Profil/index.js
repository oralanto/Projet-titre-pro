// == Import npm
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// == Import
import reactLogo from './react-logo.svg';

import './style.scss';

// == Composant
const Profil = () => {
  const [profil, setProfil] = useState([]);

  useEffect(() => {
    axios
      .get('http://34.207.234.22/api/profil')
      .then((res) => setProfil(res.data));
  }, []);

  return (
    <div className="profil">
      <div className="profil__picture">
        <h1>Profil</h1>
        <img className="profil__picture__img" src={reactLogo} alt="react logo" />
      </div>
      <div className="profil__info">
        <div className="profil__info__h2"> Pseudo</div>
        <div className="profil__info__bar" />
        <div className="profil__info__h2"> Nom</div>
        <span className="profil__info__bar" />
        <div className="profil__info__h2"> Prenom</div>
        <span className="profil__info__bar" />
        <div className="profil__info__h2"> Adresse</div>
        <span className="profil__info__bar" />
        <div className="profil__info__h2"> Numero de telephone</div>
        <span className="profil__info__bar" />
      </div>
      <div className="profil__links">
        <Link
          to="/modifier-profil"
          key={profil.id}
          className="profil__info__buttons"
        > Modifier Profil
        </Link>
        <Link
          to="/user-adverts"
          key={profil.id}
          className="profil__info__buttons"
        > Modifier ses Annonces
        </Link>
        <Link
          to="/supprimer-profil"
          key={profil.id}
          className="profil__info__buttons"
        > Supprimer son profil
        </Link>
      </div>

    </div>
  );
};

// == Export
export default Profil;
