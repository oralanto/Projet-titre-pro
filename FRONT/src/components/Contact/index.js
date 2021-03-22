// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';

// == Import
import './style.scss';

// == Composant
const Contact = ({
  onSubmitFormContact,
}) => {
  const thisOnSubmit = (event) => {
    event.preventDefault();
    onSubmitFormContact();
  };
  return (
    <div className="Contact">
      <h1 className="Contact__title">Contactez-nous</h1>
      <form className="Contact__form" onSubmit={thisOnSubmit}>
        <Field
          className="Contact__form__field"
          type="text"
          label="Nom"
          name="lastname"
        />
        <Field
          className="Contact__form__field"
          type="text"
          label="Prénom"
          name="firstname"
        />
        <Field
          className="Contact__form__field"
          type="text"
          label="Adresse mail"
          name="email"
        />
        <Field
          className="Contact__form__field"
          type="text"
          label="Numéro de téléphone"
          name="phoneNumber"
        />
        <textarea
          className="Contact__form__textarea"
          rows="10"
          placeholder="Laisser votre message"
        />
        <input className="Contact__form__button" type="submit" value="Envoyer votre message" />
      </form>
    </div>
  );
};

Contact.propTypes = {
  onSubmitFormContact: PropTypes.func.isRequired,
};

// == Export
export default Contact;
