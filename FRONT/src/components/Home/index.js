// == Import npm
import React from 'react';

// == Import
import './style.scss';
import logo from '../../../img/Logo_phase_3_Complet.svg';

// == Composant
const Home = () => (
  <div className="home">
    <div className="home__search">
      <p className="home__search__title"> Vous savez ce que vous cherchez ?</p>
      <input className="home__search__bar" placeholder="7 Wonders, Monopoly..." type="text" />
    </div>
    <div className="home__center">
      <div className="home__text">
        <p>
          Bienvenue sur O'Boardgame, premier site français de location de jeux de société de particulier à particulier !
        </p>
      </div>
      <div className="home__logo">
        <img className="home__logo" src={logo} alt="logo" />
      </div>
    </div>
    <div className="home__categories">
      <p className="home__categories__title">Catégories</p>
      <ul className="home__categories__cat">
        <li className="home__categories__link">Ambiance</li>
        <li className="home__categories__link">Famille</li>
        <li className="home__categories__link">Hasard</li>
        <li className="home__categories__link">Plateau</li>
        <li className="home__categories__link">Rôle</li>
        <li className="home__categories__link">Stratégie</li>
      </ul>
    </div>
  </div>
);

// == Export
export default Home;
