// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

// == Import
import './style.scss';

// == Composant
const Header = ({isLogged}) => (
  <div className="header">
    <div className="header__logo">
      <Link to="accueil" className="header__logo__svg">LOGO</Link>
    </div>
    <nav className="header__nav">
      <Link to="/accueil" className="header__nav__link">Accueil</Link>
      <Link to="/annonces" className="header__nav__link">Annonces</Link>
      <Link to="/creer-une-annonce" className="header__nav__link">Creer une annonce</Link>
      {isLogged && <Link to="/supprimer-une-annonce" className="header__nav__link">supprimer une annonce</Link>}
      <Link to="/connexion" className="header__nav__link--connexion">{!isLogged?'Se connecter':'se déconnecter'}</Link>
      

      
    </nav>
  </div>
);
Header.propTypes = {
  isLogged: PropTypes.bool,
};

Header.defaultProps = {
  isLogged: false,
};
// == Export
export default Header;
