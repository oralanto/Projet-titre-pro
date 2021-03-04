// == Import npm
import React from 'react';
import {
  Link,
} from 'react-router-dom';

// == Import
import './style.scss';

// == Composant
const UserDashboard = () => (
  <div className="UserDashboard">
    <h1 className="UserDashboard__title">Tableau de bord Utilisateur</h1>
    <Link to="/Gestion-annonces" className="UserDashboard__card">Gestion des annonces</Link>
    <Link to="/Profil" className="UserDashboard__card">Profil</Link>
  </div>
);

// == Export
export default UserDashboard;
