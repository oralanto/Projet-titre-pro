// == Import npm
import React from 'react';
import {
  Link,
} from 'react-router-dom';

// == Import
import './style.scss';

// == Composant
const AdminDashboard = () => (
  <div className="AdminDashboard">
    <h1 className="AdminDashboard__title">Tableau de bord Administrateur</h1>
    <Link to="/Gestion-utilisateur" className="AdminDashboard__card">Gestion des utilisateurs</Link>
    <Link to="/Gestion-annonces" className="AdminDashboard__card">Gestion des annonces</Link>
    <Link to="/Profil" className="AdminDashboard__card">Profil</Link>
  </div>
);

// == Export
export default AdminDashboard;
