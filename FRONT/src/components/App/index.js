// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
// import LegalNotes from 'src/components/LegalNotes';
// import AboutUs from 'src/components/AboutUs';
// import Contact from 'src/components/Contact';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Home />
    {/* <LegalNotes /> */}
    {/* <AboutUs /> */}
    {/* <Contact /> */}
    <Footer />
  </div>
);

// == Export
export default App;
