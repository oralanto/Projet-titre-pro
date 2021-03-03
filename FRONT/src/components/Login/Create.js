// == Import npm
import React from 'react';

// == Import
import './style.scss';

// == Composant
const Login = () => (
  <div className="login">
    <p>Creer un compte</p>
    <div className="login__connexion">
      <p className="login__connexion__field">Pseudo</p>
      <input className="login__connexion__bar" placeholder=" Ecrivez ici..." type="text" />
      <p className="login__connexion__field"> Prénom</p>
      <input className="login__connexion__bar" placeholder=" Ecrivez ici..." type="text" />
      <p className="login__connexion__field"> Nom</p>
      <input className="login__connexion__bar" placeholder=" Ecrivez ici..." type="text" />
      <p className="login__connexion__field"> E mail</p>
      <input className="login__connexion__bar" placeholder=" Ecrivez ici..." type="text" />
      <p className="login__connexion__field"> Mot de passe <span className="login__connexion__eye">eye</span></p>
      <input className="login__connexion__bar" placeholder=" Ecrivez ici..." type="text" />
      <button className="login__connexion__button" type="button">Se connecter</button>
    </div>
    <button className="login__button" type="button">Connexion</button>
  </div>
);

// == Export
export default Login;
