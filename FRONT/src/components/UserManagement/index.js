// == Import npm
import React from 'react';

// == Import
import './style.scss';

// == Composant
const UserDashboard = () => (
  <div className="userdashboard">
    <h1>Gestion des utilisateurs</h1>
    <table className="userdashboard__board">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Pseudo</th>
          <th>Contacter</th>
          <th>Supprimer</th>
        </tr>
      </thead>
      <tbody>
        <td>Nom</td>
        <td>Prenom</td>
        <td>Pseudo</td>
        <td>Mail</td>
        <td><button type="button">X</button></td>
      </tbody>
      <tbody>
        <td>Nom</td>
        <td>Prenom</td>
        <td>Pseudo</td>
        <td>Mail</td>
        <td><button type="button">X</button></td>
      </tbody>
      <tbody>
        <td>Nom</td>
        <td>Prenom</td>
        <td>Pseudo</td>
        <td>Mail</td>
        <td><button type="button">X</button></td>
      </tbody>
      <tbody>
        <td>Nom</td>
        <td>Prenom</td>
        <td>Pseudo</td>
        <td>Mail</td>
        <td><button type="button">X</button></td>
      </tbody>
      <tbody>
        <td>Nom</td>
        <td>Prenom</td>
        <td>Pseudo</td>
        <td>Mail</td>
        <td><button type="button">X</button></td>
      </tbody>
    </table>
  </div>
);

// == Export
export default UserDashboard;
