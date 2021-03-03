// == Import npm
import React from 'react';

// == Import
import './style.scss';

// == Composant
const UserDashboard = () => (
  <div className="UserDashboard">
    <h1 className="UserDashboard__title">Tableau de bord Utilisateur</h1>
      <a href="/Gestion-annonces" className="UserDashboard__card">Gestion des annonces</a>
      <a href="/Profil" className="UserDashboard__card">Profil</a>
  </div>
);

// == Export
export default UserDashboard;
