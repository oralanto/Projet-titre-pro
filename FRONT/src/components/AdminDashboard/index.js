// == Import npm
import React from 'react';

// == Import
import './style.scss';

// == Composant
const AdminDashboard = () => (
  <div className="AdminDashboard">
    <h1 className="AdminDashboard__title">Tableau de bord Administrateur</h1>
      <a href="/Gestion-utilisateur" className="AdminDashboard__card">Gestion des utilisateurs</a>
      <a href="/Gestion-annonces" className="AdminDashboard__card">Gestion des annonces</a>
      <a href="/Profil" className="AdminDashboard__card">Profil</a>
  </div>
);

// == Export
export default AdminDashboard;
