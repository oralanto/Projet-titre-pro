// == Import npm
import React from 'react';

// == Import
import './style.scss';

// == Composant
const Contact = () => (
  <div className="Contact">
    <h1 className="Contact__title">Contactez-nous</h1>
    <form className="Contact__form" action="">
      <p className="Contact__form__title">Nom et prénom</p>
      <input className="Contact__form__input" type="text" />
      <p className="Contact__form__title">E-mail</p>
      <input className="Contact__form__input" type="text" />
      <p className="Contact__form__title">Téléphone</p>
      <input className="Contact__form__input" type="text" />
      <p className="Contact__form__title">Votre message</p>
      <textarea className="Contact__form__textarea" type="textarea" />
      <input className="Contact__form__button" type="submit" />
    </form>
  </div>
);

// == Export
export default Contact;
