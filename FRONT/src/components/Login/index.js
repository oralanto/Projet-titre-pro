/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import npm
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';

// == Import
import './style.scss';

// == Composant
const Login = ({ onSubmitForm }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('submit du form');
    // onSubmitForm();
    axios.post('http://localhost:3001/login', {
      email: 'toto@coucou.com',
      password: 'coucou',
    })
      .then((response) => {
        console.log('response', response);
      })
      .catch((err) => console.log('err', err));
  };
  return (
    <div className="Login">
      <p className="Login__title">Connexion</p>
      <form className="Login__form" onSubmit={handleOnSubmit}>
        <Field
          type="Email"
          label="Email"
          name="email"
        />
        <Field
          type="password"
          label="password"
          name="password"
        />
        <button type="submit" className="Login__form__submit">Se connecter</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

// == Export
export default Login;
