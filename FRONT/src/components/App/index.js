// == Import npm
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import LegalNotes from 'src/components/LegalNotes';
import AboutUs from 'src/components/AboutUs';
import Contact from 'src/components/Contact';
import Adverts from 'src/components/Adverts';
import Advert from 'src/components/Advert';
import UserManagement from 'src/components/UserManagement';
import Login from 'src/containers/Login';
import Profil from 'src/components/Profil';
import AdminDashboard from 'src/components/AdminDashboard';
import UserDashboard from 'src/components/UserDashboard';
import CreateAdvert from 'src/components/CreateAdvert';

import './styles.scss';

// == Composant
const App = () => {
  console.log('coucou');
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/accueil">
            <Home />
          </Route>
          <Route path="/mentions-legales">
            <LegalNotes />
          </Route>
          <Route path="/a-propos-de-nous">
            <AboutUs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/annonces">
            <Adverts />
          </Route>
          <Route path="/annonce">
            <Advert />
          </Route>
          <Route path="/gestion-utilisateur">
            <UserManagement />
          </Route>
          <Route path="/connexion">
            <Login />
          </Route>
          <Route path="/profil">
            <Profil />
          </Route>
          <Route path="/tableau-de-bord-admin">
            <AdminDashboard />
          </Route>
          <Route path="/tableau-de-bord-utilisateur">
            <UserDashboard />
          </Route>
          <Route path="/creer-une-annonce">
            <CreateAdvert />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

// == Export
export default App;
