// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import LegalNotes from 'src/components/LegalNotes';
import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    {/* <Home /> */}
    <LegalNotes />
    <Footer />
  </div>
);

// == Export
export default App;
