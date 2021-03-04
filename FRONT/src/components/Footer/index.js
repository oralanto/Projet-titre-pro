// == Import npm
import React from 'react';
import {
  Link,
} from 'react-router-dom';

// == Import
import './style.scss';

// == Composant
const Footer = () => (
  <nav className="footer">
    <Link to="/contact" className="footer__link">Contact</Link>
    <Link to="/mentions-legales" className="footer__link">Mentions légales</Link>
    <Link to="/a-propos-de-nous" className="footer__link">A propos de nous</Link>
  </nav>
);

// == Export
export default Footer;
