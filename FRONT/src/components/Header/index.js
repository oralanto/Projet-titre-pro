// == Import npm
import React from 'react';
import {
  Link,
} from 'react-router-dom';

// == Import
import './style.scss';

// == Composant
const Header = () => (
  <div className="header">
    <div className="header__logo">
      <Link to="accueil" className="header__logo__svg">LOGO</Link>
    </div>
    <nav className="header__nav">
      <Link to="/accueil" className="header__nav__link">Accueil</Link>
      <Link to="/annonces" className="header__nav__link">Annonces</Link>
      <Link to="/creer-une-annonce" className="header__nav__link">Creer une annonce</Link>
      <Link to="/modifier-une-annonce" className="header__nav__link">Modifier une annonce</Link>

      <Link to="/connexion" className="header__nav__link--connexion">Se connecter</Link>
    </nav>
  </div>
);

// == Export
export default Header;
