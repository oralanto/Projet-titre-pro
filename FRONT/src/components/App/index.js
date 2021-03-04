// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
// import LegalNotes from 'src/components/LegalNotes';
// import AboutUs from 'src/components/AboutUs';
// import Contact from 'src/components/Contact';
// import Adverts from 'src/components/Adverts';
// import Advert from 'src/components/Advert';
// import UserManagement from 'src/components/UserManagement';
// import Login from 'src/components/Login';
// import Profil from 'src/components/Profil';
// import AdminDashboard from 'src/components/AdminDashboard';
// import UserDashboard from 'src/components/UserDashboard';
// import CreateAdvert from 'src/components/CreateAdvert';
// import SearchBar from 'src/components/SearchBar';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Home />
    {/* <LegalNotes /> */}
    {/* <AboutUs /> */}
    {/* <Contact /> */}
    {/* <Adverts /> */}
    {/* <Advert /> */}
    {/* <UserManagement /> */}
    {/* <Login /> */}
    {/* <Profil /> */}
    {/* <AdminDashboard /> */}
    {/* <UserDashboard /> */}
    {/* <CreateAdvert /> */}
    {/* <SearchBar /> */}

    <Footer />
  </div>
);

// == Export
export default App;
