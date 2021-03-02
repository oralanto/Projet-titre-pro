// == Import npm
import React from 'react';

// == Import
import './style.scss';

// == Composant
const Header = () => (
  <div className="header">
    <div className="header__logo">
      <a className="header__logo__svg">LOGO</a>
    </div>
    <nav className="header__nav">
      <a href="/home" className="header__nav__link">Accueil</a>
      <a href="/adverts" className="header__nav__link">Annonces</a>
      <a href="/create-advert" className="header__nav__link">Creer une annonce</a>
      <a href="/login" className="header__nav__link--connexion">Se connecter</a>
    </nav>
  </div>
);

// == Export
export default Header;
