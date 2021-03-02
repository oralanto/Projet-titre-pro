// == Import npm
import React from 'react';

// == Import
import './style.scss';

// == Composant
const Footer = () => (
  <nav className="footer">
    <a href="/contact" className="footer__link">Contact</a>
    <a href="/legal-notes" className="footer__link">Mentions légales</a>
    <a href="/about-us" className="footer__link">A propos de nous</a>
  </nav>
);

// == Export
export default Footer;
