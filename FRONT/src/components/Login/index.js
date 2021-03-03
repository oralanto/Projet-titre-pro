/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import npm
import React from 'react';

// == Import
import './style.scss';

// == Composant
const Login = () => (
  <div className="login">
    <p>Connexion</p>
    <form className="login__connexion">
      <label className="login__connexion__field"> E mail
        <input className="login__connexion__bar" name=" Ecrivez ici..." type="text" />
      </label>
      <label className="login__connexion__field"> Mot de passe
        <input className="login__connexion__bar" name=" Ecrivez ici..." type="text" />
      </label>
      <a href="/mot-de-passe-oublie" className="login__connexion__password">Mot de passe oublié ?</a>
      <input className="login__connexion__button" type="submit" value="Se connecter" />

    </form>
    <button className="login__button" type="button">Creer un compte</button>
  </div>
);

// == Export
export default Login;
